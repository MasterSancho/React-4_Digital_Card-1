import { Container, Row, Carousel, Image, Col } from 'react-bootstrap';
import products from '../products';

const RecommendsCarousel = () => {
 const images = products.galleryRecommImgs;

 return (
  <Container>
   <Row>
    <Col>
     <h2 className='text-center text-primary'>לקוחות ממליצים</h2>

     <Carousel pause='hover' className='bg-dark'>
      {images.map((image) => (
       <Carousel.Item key={image.id}>
        <Image src={image.image} alt='' fluid />
       </Carousel.Item>
      ))}
     </Carousel>
    </Col>
   </Row>
  </Container>
 );
};
export default RecommendsCarousel;
