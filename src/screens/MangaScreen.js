import axios from "../axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../styles/MangaScreen.scss"
import Nav from "../components/Nav"

const MangaScreen = () => {
  const { id } = useParams()
  const [manga, setManga] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/manga/${id}`)
      setManga(data)
    }

    fetchData()
  }, [id])

  return (
    <div className="mangaScreen">
      <Nav />
      <div className="mangaScreen__container">
        <h1>{manga.title}</h1>
        <div className="mangaScreen__content">
          <div className="mangaScreen__sidebar">
            <div className="mangaScreen__sidebarImg">
              <img src={manga.image_url} alt={manga.title} />
            </div>

            <div className="mangaScreen__sidebarInfo">
              <h2>Information</h2>

              {manga.type && (
                <p>
                  <strong>Type: </strong>
                  {manga.type}
                </p>
              )}
              {manga.volumes && (
                <p>
                  <strong>Volumes: </strong>
                  {manga.volumes}
                </p>
              )}
              {manga.chapters && (
                <p>
                  <strong>Chapters: </strong>
                  {manga.chapters}
                </p>
              )}
              {manga.status && (
                <p>
                  <strong>Status: </strong>
                  {manga.status}
                </p>
              )}
              {manga.published && (
                <p>
                  <strong>Published: </strong>
                  {manga.published.string}
                </p>
              )}
              {manga.genres && (
                <p>
                  <strong>Genres: </strong>
                  {manga.genres.map((genre, i) =>
                    i !== manga.genres.length - 1
                      ? `${genre.name}, `
                      : `${genre.name}`
                  )}
                </p>
              )}
              {manga.authors && (
                <p>
                  <strong>Authors: </strong>
                  {manga.authors.map((author, i) =>
                    i !== manga.authors.length - 1
                      ? `${author.name}, `
                      : `${author.name}`
                  )}
                </p>
              )}
              {manga.serializations && (
                <p>
                  <strong>Serialization: </strong>
                  {manga.serializations.map((serialization, i) =>
                    i !== manga.serializations.length - 1
                      ? `${serialization.name}, `
                      : `${serialization.name}`
                  )}
                </p>
              )}
            </div>

            <div className="mangaScreen__statistics">
              <h2>Statistics</h2>

              {manga.score && (
                <p>
                  <strong>Score: </strong>
                  {manga.score} ({manga.scored_by ? manga.scored_by : `-`}{" "}
                  users)
                </p>
              )}
              {manga.rank && (
                <p>
                  <strong>Rank: </strong>#{manga.rank}
                </p>
              )}
              {manga.popularity && (
                <p>
                  <strong>Popularity: </strong>#{manga.popularity}
                </p>
              )}
              {manga.members && (
                <p>
                  <strong>Members: </strong>
                  {manga.members}
                </p>
              )}
              {manga.favorites && (
                <p>
                  <strong>Favorites: </strong>
                  {manga.favorites}
                </p>
              )}
            </div>
          </div>

          <div className="mangaScreen__body">
            <div className="mangaScreen__scoreInfo">
              <div className="mangaScreen__scoreInfo-rating">
                <p className="mangaScreen__scoreInfo-ratingTitle">SCORE</p>
                <p className="mangaScreen__scoreInfo-ratingScore">
                  {manga.score ? manga.score : `TBA`}
                </p>
                <p className="mangaScreen__scoreInfo-ratingUsers">
                  {manga.scored_by ? manga.scored_by : `-`} users
                </p>
              </div>

              <div className="mangaScreen__rankInfo">
                <div className="mangaScreen__rankInfo-first">
                  <span className="mangaScreen__rankInfo-firstSpan">
                    Rank #{manga.rank}
                  </span>
                  <span className="mangaScreen__rankInfo-firstSpan">
                    Popularity #{manga.popularity}
                  </span>
                  <span className="mangaScreen__rankInfo-firstSpan">
                    Members {manga.members}
                  </span>
                </div>
                <div className="mangaScreen__rankInfo-second">
                  <span className="mangaScreen__rankInfo-secondSpan">
                    {manga.type}
                  </span>
                  <span className="mangaScreen__rankInfo-secondSpan">
                    {manga.serializations &&
                      manga.serializations.map((serialization, i) =>
                        i !== manga.serializations.length - 1
                          ? `${serialization.name}, `
                          : `${serialization.name}`
                      )}
                  </span>
                  <span className="mangaScreen__rankInfo-secondSpan">
                    {manga.authors &&
                      manga.authors.map((author, i) =>
                        i !== manga.authors.length - 1
                          ? `${author.name}, `
                          : `${author.name}`
                      )}
                  </span>
                </div>
              </div>
            </div>

            <p>
              <a href={manga.url}>Go To MyAnimeList</a>
            </p>

            <div className="mangaScreen__details">
              <h3>Synopsis</h3>
              <p>{manga.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangaScreen
