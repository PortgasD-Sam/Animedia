import axios from "../axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
import "../styles/AnimeScreen.scss"

const AnimeScreen = () => {
  const { id } = useParams()
  const [anime, setAnime] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/anime/${id}`)
      setAnime(data)
    }

    fetchData()
  }, [id])

  return (
    <div className="animeScreen">
      <Nav />
      <div className="animeScreen__container">
        <h1>{anime.title}</h1>
        <div className="animeScreen__content">
          <div className="animeScreen__sidebar">
            <div className="animeScreen__sidebarImg">
              <img src={anime.image_url} alt={anime.title} />
            </div>

            <div className="animeScreen__sidebarInfo">
              <h2>Information</h2>

              {anime.type && (
                <p>
                  <strong>Type: </strong>
                  {anime.type}
                </p>
              )}
              {anime.episodes && (
                <p>
                  <strong>Episodes: </strong>
                  {anime.episodes}
                </p>
              )}
              {anime.status && (
                <p>
                  <strong>Status: </strong>
                  {anime.status}
                </p>
              )}
              {anime.aired && (
                <p>
                  <strong>Aired: </strong>
                  {anime.aired.string}
                </p>
              )}
              {anime.premiered && (
                <p>
                  <strong>Premiered: </strong>
                  {anime.premiered}
                </p>
              )}
              {anime.broadcast && (
                <p>
                  <strong>Broadcast: </strong>
                  {anime.broadcast}
                </p>
              )}
              {anime.producers && (
                <p>
                  <strong>Producers: </strong>
                  {anime.producers.map((producer, i) =>
                    i !== anime.producers.length - 1
                      ? `${producer.name}, `
                      : `${producer.name}`
                  )}
                </p>
              )}
              {anime.studios && (
                <p>
                  <strong>Studios: </strong>
                  {anime.studios.map((studio, i) =>
                    i !== anime.studios.length - 1
                      ? `${studio.name}, `
                      : `${studio.name}`
                  )}
                </p>
              )}
              {anime.source && (
                <p>
                  <strong>Source: </strong>
                  {anime.source}
                </p>
              )}
              {anime.genres && (
                <p>
                  <strong>Genres: </strong>
                  {anime.genres.map((genre, i) =>
                    i !== anime.genres.length - 1
                      ? `${genre.name}, `
                      : `${genre.name}`
                  )}
                </p>
              )}
              {anime.duration && (
                <p>
                  <strong>Duration: </strong>
                  {anime.duration}
                </p>
              )}
              {anime.rating && (
                <p>
                  <strong>Rating: </strong>
                  {anime.rating}
                </p>
              )}
            </div>

            <div className="animeScreen__statistics">
              <h2>Statistics</h2>

              {anime.broadcast && (
                <p>
                  <strong>Broadcast: </strong>
                  {anime.broadcast}
                </p>
              )}
              {anime.score && (
                <p>
                  <strong>Score: </strong>
                  {anime.score} ({anime.scored_by ? anime.scored_by : `-`}{" "}
                  users)
                </p>
              )}
              {anime.rank && (
                <p>
                  <strong>Rank: </strong>#{anime.rank}
                </p>
              )}
              {anime.popularity && (
                <p>
                  <strong>Popularity: </strong>#{anime.popularity}
                </p>
              )}
              {anime.members && (
                <p>
                  <strong>Members: </strong>
                  {anime.members}
                </p>
              )}
              {anime.favorites && (
                <p>
                  <strong>Favorites: </strong>
                  {anime.favorites}
                </p>
              )}
            </div>
          </div>

          <div className="animeScreen__body">
            <div className="animeScreen__scoreInfo">
              <div className="animeScreen__scoreInfo-rating">
                <p className="animeScreen__scoreInfo-ratingTitle">SCORE</p>
                <p className="animeScreen__scoreInfo-ratingScore">
                  {anime.score ? anime.score : `TBA`}
                </p>
                <p className="animeScreen__scoreInfo-ratingUsers">
                  {anime.scored_by ? anime.scored_by : `-`} users
                </p>
              </div>

              <div className="animeScreen__rankInfo">
                <div className="animeScreen__rankInfo-first">
                  <span className="animeScreen__rankInfo-firstSpan">
                    Rank #{anime.rank}
                  </span>
                  <span className="animeScreen__rankInfo-firstSpan">
                    Popularity #{anime.popularity}
                  </span>
                  <span className="animeScreen__rankInfo-firstSpan">
                    Members {anime.members}
                  </span>
                </div>
                <div className="animeScreen__rankInfo-second">
                  <span className="animeScreen__rankInfo-secondSpan">
                    {anime.premiered}
                  </span>
                  <span className="animeScreen__rankInfo-secondSpan">
                    {anime.type}
                  </span>
                  <span className="animeScreen__rankInfo-secondSpan">
                    {anime.studios &&
                      anime.studios.map((studio, i) =>
                        i !== anime.studios.length - 1
                          ? `${studio.name}, `
                          : `${studio.name}`
                      )}
                  </span>
                </div>
              </div>
            </div>

            <p>
              <a href={anime.url}>Go To MyAnimeList</a>
            </p>

            <div className="animeScreen__details">
              <h3>Synopsis</h3>
              <p>{anime.synopsis}</p>

              {anime.trailer_url && (
                <>
                  <h3>Trailer</h3>
                  <div className="animeScreen__iframeContainer">
                    <iframe
                      src={anime.trailer_url}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeScreen
