import './css/Plants.css';
import Item from '../components/Item';
import PlantPlan from '../components/Plant-Plan';

function Plants() {
    return(
        
        <div className="columns">
          <h1>Plants</h1>
          
          <PlantPlan />
          {/*
          <Item
          name="Mulch"
          description="Useful for keep the soil a good temperature and to prevent weeds from growing."
          price="3.99"
          rating="4.2"
          image="./images/mulch.png"/>
          <Item
          name="Pine Straw"
          description="Useful for fertilizing grass."
          price="4.99"
          rating="3.4"
          image="./images/straw.png"/>
          <Item
          name="Pine Tree"
          description="Tall, bushy tree. Commonly used as Christmas trees."
          price="32.99"
          rating="4.4"
          image="./images/tree.png"/>
          <Item
          name="Flowers"
          description="Roses are our speciality, especially around this time."
          price="6.99"
          rating="3.3"
          image="./images/flower.jpg"/>
          */}
      </div>
        
    );
}

export default Plants;