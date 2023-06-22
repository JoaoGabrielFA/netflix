import Banner from './Banner';
import Row from './Row';

function Page({banner, data}) {
  return (
    <>
      <Banner 
        name={banner && banner.title ? banner && banner.title : banner && banner.name}
        image={banner && `https://image.tmdb.org/t/p/original/${banner.backdrop_path}`}
        description={banner && banner.overview}
        type={banner && banner.title ? 'movie' : 'tv'}
        id={banner && banner.id}
      />
      {data.length > 0 && data.map((element, key) =>{
        return <Row key={key} name={element.title} data={element.data}/>
      })}
    </>
  )
}

export default Page;