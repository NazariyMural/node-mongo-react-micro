import React from "react";

type Data = {
  name: string;
  type: string;
};

const MainContainer = () => {
  //
  const makeSaveFunc = (
    selector: string,
    postNameFunc: (value: any) => void
  ) => () => {
    try {
      const el = document.querySelector(selector);
      // @ts-ignore
      if (el) postNameFunc(el.value);
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const makePostNameFunc = (uri: string) => (val: any) => {
    fetch(uri, {
      method: "POST",
      body: JSON.stringify({ name: val }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  };

  const postVideoName = makePostNameFunc("http://localhost:8080/api/v1/videos");
  const postBookName = makePostNameFunc("http://localhost:8080/api/v1/books");

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      fetch("http://localhost:8080/api/v1/search")
        .then(resp => resp.json())
        .then(results => {
          const ul = document.querySelector("#matches");
          if (ul) {
            ul.innerHTML = "";
            results.forEach((data: Data) => {
              const li = document.createElement("li");
              const liContent = `
                      <p>${data.name}</p>
                      <p>${data.type}</p>
                    `;
              li.innerHTML = liContent;
              ul.appendChild(li);
            });
          }
        });
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const API = () => {
    return {
      saveVideo: (e: React.SyntheticEvent) => {
        e.preventDefault();
        return makeSaveFunc("#videoName", postVideoName)();
      },
      saveBook: (e: React.SyntheticEvent) => {
        e.preventDefault();
        return makeSaveFunc("#bookName", postBookName)();
      },
      search: handleSearch
    };
  };

  const { saveVideo, saveBook, search } = API();

  return (
    <div>
      <h1>Create books</h1>
      <form onSubmit={saveBook}>
        <input id="bookName" type="text" />
        <input type="submit" value="submit" />
      </form>
      <h1>Create videos</h1>
      <form onSubmit={saveVideo}>
        <input id="videoName" type="text" />
        <input type="submit" value="submit" />
      </form>
      <h1>Search</h1>
      <form onSubmit={search}>
        <input id="search" type="text" />
        <input type="submit" value="submit" />
      </form>
      <ul id="matches"></ul>
    </div>
  );
};

export default MainContainer;
