import axios from "../axios"
import React, { useState } from "react"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Row from "../components/Row"
import requests from "../Requests"
import "../styles/HomeScreen.scss"
import { useHistory } from "react-router-dom"

const HomeScreen = () => {
  const [search, setSearch] = useState("")
  const [animeList, setAnimeList] = useState([])
  const [mangaList, setMangaList] = useState([])
  const history = useHistory()

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fetchData = async () => {
      const { data: anime } = await axios.get(
        `/search/anime?q=${encodeURI(search)}&order_by=title&sort=asc&limit=5`
      )
      const { data: manga } = await axios.get(
        `/search/manga?q=${encodeURI(search)}&order_by=title&sort=asc&limit=5`
      )
      setAnimeList(anime.results)
      setMangaList(manga.results)
    }

    fetchData()
    setSearch("")
  }

  const handleClear = () => {
    setAnimeList([])
    setMangaList([])
  }

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <form className="homeScreen__searchbar" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for anime and manga..."
          required
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>

      {(animeList.length || mangaList.length) && (
        <div className="homeScreen__searchList">
          <h2>Search Results</h2>
          {animeList.length &&
            animeList.map((anime) => (
              <div className="homeScreen__searchItem">
                <div className="homeScreen__searchItem-img">
                  <img src={anime.image_url} alt={anime.title} />
                </div>

                <div className="homeScreen__searchItem-details">
                  <p>
                    <span className="homeScreen__searchItem-span">Title:</span>{" "}
                    <span
                      className="homeScreen__searchItem-link"
                      onClick={() =>
                        history.push(`/details/anime/${anime.mal_id}`)
                      }
                    >
                      <strong>{anime.title}</strong>
                    </span>
                  </p>
                  <p>
                    <span className="homeScreen__searchItem-span">Score:</span>{" "}
                    {anime.score ? anime.score : "TBA"}
                  </p>
                  <>
                    <span className="homeScreen__searchItem-span">Type:</span>{" "}
                    {anime.type}
                  </>
                  <p>
                    <span className="homeScreen__searchItem-span">Title:</span>{" "}
                    {anime.synopsis.length
                      ? truncate(anime.synopsis, 150)
                      : "Not revealed yet"}
                  </p>
                </div>
              </div>
            ))}
          {mangaList.length &&
            mangaList.map((manga) => (
              <div className="homeScreen__searchItem">
                <div className="homeScreen__searchItem-img">
                  <img src={manga.image_url} alt={manga.title} />
                </div>

                <div className="homeScreen__searchItem-details">
                  <p>
                    <span className="homeScreen__searchItem-span">Title:</span>{" "}
                    <span
                      className="homeScreen__searchItem-link"
                      onClick={() =>
                        history.push(`/details/manga/${manga.mal_id}`)
                      }
                    >
                      <strong>{manga.title}</strong>
                    </span>
                  </p>
                  <p>
                    <span className="homeScreen__searchItem-span">Score:</span>{" "}
                    {manga.score ? manga.score : "TBA"}
                  </p>
                  <p>
                    <span className="homeScreen__searchItem-span">Type:</span>{" "}
                    {manga.type}
                  </p>
                  <p>
                    <span className="homeScreen__searchItem-span">Title:</span>{" "}
                    {manga.synopsis.length
                      ? truncate(manga.synopsis, 150)
                      : "Not revealed yet"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {(animeList.length || mangaList.length) && (
        <button className="homeScreen__clearSearch" onClick={handleClear}>
          Clear Search
        </button>
      )}

      <Row title="Top Airing Anime" fetchUrl={requests.getTopAiringAnimes} />
      <Row
        title="Top Upcoming Anime"
        fetchUrl={requests.getTopUpcomingAnimes}
      />
      <Row title="Top TV Series" fetchUrl={requests.getTopTvAnimes} />
      <Row title="Top Movies" fetchUrl={requests.getTopMovieAnimes} />
      <Row title="Top OVAs" fetchUrl={requests.getTopOvaAnimes} />
      <Row title="Top Specials" fetchUrl={requests.getTopSpecialAnimes} />
      <Row title="Top Mangas" fetchUrl={requests.getTopMangas} />
      <Row title="Top Novels" fetchUrl={requests.getTopNovels} />
    </div>
  )
}

export default HomeScreen
