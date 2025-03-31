import './css/Equipment.css';
import Tree from '../components/Tree';

function Equipment() {
    return(
        <>
            <h1>Equipment</h1>
            <>
      <section className="columns">
          <Tree 
          name="Live Oak"
          description="Doesn't lose it's leaves"
          image="./images/liveoak.jpg"/>
          <Tree 
          name="Dogwood"
          description="Flowers in spring"
          image="./images/dogwood.jpg"/>
      </section>
        
    </>
        </>
    );
}

export default Equipment;