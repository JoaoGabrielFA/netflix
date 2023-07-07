  function NewsCard({data}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', color: 'grey', fontSize: '1rem', marginBottom: '-5px' }}>
              {data && data.release_date && 0 + data.release_date.slice(6, 7)}
            </span>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5rem' }}>
              {data && data.release_date && data.release_date.slice(8, 10)}
            </span>
          </div>
          <div style={{ width: '86%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data && data.backdrop_path})`
              }}>
            </div>
            <span style={{margin:'5px 0', 
                          color: 'white', 
                          fontSize:'1.5rem', 
                          fontWeight:'bold'}}>
            {data && data.title}
            </span>
            <span style={{ color: 'white' }}>
                {data &&
                data.overview &&
                data.overview.length > 150 ?
                data.overview.substring(0, 150) + "..." : data && data.overview
                }
            </span>
          </div>
        </div>
  )
}

export default NewsCard;