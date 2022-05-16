import { useNavigate } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

const ListGroupBtstp = (props) => {

  const navigate = useNavigate();
  
  const submitUrl = (link) => {
    props.onClick(link);
    navigate(link);
  }

  return(
    <>
      <ListGroup defaultActiveKey=''>
        {
          props.metodos.map((map) =>(
            <ListGroup.Item key={map.name} action onClick={() => submitUrl(map.link)}>
              {map.name}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </>
  );
}

export default ListGroupBtstp;