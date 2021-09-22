function ItemsDisplay(props) {
  const renderItems = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">Price</th>
              <th scope="col">type</th>
              <th scope="col">brand</th>
            </tr>
          </thead>
          <tbody> {props.items.map(renderItems)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
