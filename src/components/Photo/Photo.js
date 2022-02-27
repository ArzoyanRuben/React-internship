export default function Photo({ title, url }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={`${url}`}/>
      </div>
    );
  }