import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Card from "../../components/Card.tsx";
import Loader from "../../components/Loader.tsx";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(users)

  useEffect(() => {

    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  const loadMoreUsers = () => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => {

        setUsers([...users, ...data.results]);
        setLoading(false);
      });
    }, 600);
  };

  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight )return;
      loadMoreUsers();
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <div>
      <Navbar />
      <ScrollToTop smooth/>
      <div className="w-full flex flex-col justify-center gap-4 items-center p-4">
        {users?.map((user, i) => (
          <Card key={i} user={user} />
        ))}
        {
          loading && <Loader/>
        }
      </div>
    </div>
  );
};

export default Home;
