function ResourceCard({ name, category, address, phone, hours, eligibility }) {
  return (
    <div className="resource-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      {address && <p>Address: {address}</p>}
      {phone && <p>Phone: {phone}</p>}
      {hours && <p>Hours: {hours}</p>}
      {eligibility && <p>Who it serves: {eligibility}</p>}
    </div>
  );
}

export default ResourceCard;
