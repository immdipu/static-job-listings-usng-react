import React, { useEffect } from "react"
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import Datas from "./data.json"
import { useState } from "react";


function App() {
  const [jobs, setJobs] = useState([...Datas]);
  const [tags, setTags] = useState([]);


  let filterJobs = [];
  const validjob = (item) => {
    let valid = true;
    tags.forEach((tag) => {
      if (
        item.role !== tag &&
        item.level !== tag &&
        !item.languages.includes(tag) &&
        !item.tools.includes(tag)
      ) {
        valid = false;
      }
    });
    return valid;
  };



  useEffect(() => {
    Datas.forEach((item) => {
      if (validjob(item)) {
        filterJobs.push(item);
      }
    });
    setJobs(filterJobs);
  }, [tags])


  const btnfuncion = (e) => {
    let newItems = e.target.innerText;
    if (!tags.includes(newItems)) {
      setTags((prev) => {
        let newtag = [...prev, newItems]
        return newtag
      })
    }

  };



  const tagRemove = (selectedTag) => {
    let index = tags.indexOf(selectedTag);
    const temp = tags.filter((item, i) => i !== index);
    setTags(temp);
  }

  const tagDelete = e => {
    let selectedTag = e.target.parentElement.innerText.slice(0, -1).trim()
    tagRemove(selectedTag)
  }


  return (
    <>
      <div className="w-full max-w-[68rem] px-6 m-auto">
        <img src="./images/bgheaderdesktop.svg" alt="bg" className="bg-[#318181e0] absolute top-0 left-0 right-0 -z-10 h-fit " />
        {tags.length > 0 && <SearchBar tags={tags} tagDelete={tagDelete} />}
        <CardList btnfuncion={btnfuncion} jobs={jobs} />
      </div>

    </>

  );
}

export default App;
