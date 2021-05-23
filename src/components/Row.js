import React, { useEffect, useState } from "react"
import "../styles/Row.scss"
import axios from "../axios"
import { useHistory } from "react-router-dom"

const Row = ({ title, fetchUrl }) => {
  const [animes, setAnimes] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setAnimes(request.data.top)
      return request
    }

    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {animes.map(
          (anime) =>
            anime.image_url && (
              <div className={`row__card`} key={anime.mal_id}>
                <img
                  src={anime.image_url}
                  alt={anime.title}
                  className="row__cardImage"
                />

                <div className="row__cardContent">
                  <div className="row__cardContent-title">{anime.title}</div>
                  <div className="row__cardContent-score">
                    Score - {!anime.score ? "TBA" : anime.score}
                  </div>
                  <button
                    className="row__cardContent-details"
                    onClick={() => {
                      if (anime.url.includes(`/anime/`)) {
                        return history.push(`/details/anime/${anime.mal_id}`)
                      } else {
                        return history.push(`/details/manga/${anime.mal_id}`)
                      }
                    }}
                  >
                    Details
                  </button>
                  <div className="row__cardContent-footer">
                    <p>{anime.type}</p>
                    <p>{anime.start_date}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Row
