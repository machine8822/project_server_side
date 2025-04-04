import './css/Equipment.css';
import Item from '../components/Item';
import HousePlans from '../components/HousePlans';

function Equipment() {
    return(
      <div className="columns">
          <h1>Equipment</h1>
          <HousePlans />
          {/*
          <Item
          name="Mower"
          description="Useful for cutting the grass when it gets too tall."
          price="129.99"
          rating="4.2"
          image="./images/mower.png"/>
          <Item
          name="Rake"
          description="Useful for moving leaves into a pile."
          price="9.99"
          rating="3.4"
          image="./images/rake.png"/>
          <Item
          name="Edger"
          description="Useful for trimming up the edge of the grass."
          price="99.99"
          rating="4.4"
          image="./images/edger.png"/>
          <Item
          name="Leaf Blower"
          description="Useful for blowing leaves wherever you need to."
          price="38.99"
          rating="3.3"
          image="./images/leafblower.png"/>
          <Item
          name="Spreader"
          description="Useful for spreading pesticide and other chemicals over a wide area."
          price="49.99"
          rating="2.7"
          image="./images/spreader.png"/>
          */}
      </div>
        
    
        
    );
}

export default Equipment;