import './Play.css';

export default function Play() {

    const shows = [
        "https://www.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2FDjalab%2Fjalab-gr%C3%BCnberger-str-housey-mix%2F",
        "https://www.mixcloud.com/widget/iframe/?hide_cover=0&?light=1&feed=%2FDjalab%2Ftarantino-selecta-and-more%2F"
    ]

    const showList = shows.map((show) => (
        <li className="show">
            <iframe width="400px" height="400px" src={show} frameborder="0" ></iframe>
        </li>
        )
    );

    return (
        <div>
            <ul className="showList">{showList}</ul>
        </div>
    )
}