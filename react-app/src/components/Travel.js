
export default function Travel (props) {
  return(
    <div className='travel--container'>
      <img className='travel--img' src={props.img} />
      <div className='travel--text'>
        <div className='travel--location'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <a className='travel--link' href={props.maps}>View on Google Maps</a>
        </div>
        <h1 className='travel--title'>{props.title}</h1>
        <h5 className='travel--date'>{props.start_date} - {props.end_date}</h5>
        <p className='travel--description'>{props.description}</p>
      </div>
    </div>
  )
}