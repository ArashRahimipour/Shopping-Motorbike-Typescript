import storeItems from '../data/items.json'
import { Col, Row } from 'react-bootstrap'
import { json } from 'react-router-dom'
import {StoreItem} from '../components/Storitem'
const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map(item => (
          <Col key={item.id}><StoreItem {...item} /></Col>

        ))}
      </Row>
    </>
  )
}

export default Store