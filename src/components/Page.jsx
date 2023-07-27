import Banner from './Banner';
import Row from './Row';

function Page({ banner, data }) {
  return (
    <>
      {banner && (<Banner banner={banner}/>)}
      {data.length > 0 && data.map((element, key) => {
        return <Row key={key} name={element.title} data={element.data} />
      })}
    </>
  )
}

export default Page;