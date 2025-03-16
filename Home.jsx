function Item({ name ,isPacked }) {
    return <li className="item">{name}</li>;
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="hi everyone" 
          />
          <Item 
            isPacked={true} 
            name="yusuf sayir" 
          />
          <Item 
            isPacked={false} 
            name="sekiller gelir" 
          />
        </ul>
      </section>
    );
  }
  