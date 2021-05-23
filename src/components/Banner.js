import React from "react"
import { useHistory } from "react-router-dom"
import "../styles/Banner.scss"

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }
  const history = useHistory()

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${process.env.PUBLIC_URL}/jujutsu.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Jujutsu Kaisen</h1>

        <div>
          <button
            className="banner__button"
            onClick={() => history.push("/details/anime/40748")}
          >
            Details
          </button>
        </div>

        <div className="banner__description">
          {truncate(
            `Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."
Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.`,
            200
          )}
        </div>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner
