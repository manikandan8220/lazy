import React from 'react'

function ProductReview() {

    const reviews = [
        { user: 'Alice', comment: 'Great sound quality!', rating: 5 },
        { user: 'Bob', comment: 'Very comfortable.', rating: 4 },
      ];
  return (
    <>
    <div>
    <h3>Customer Reviews</h3>
      <ul>
        {reviews.map((r, idx) => (
          <li key={idx}>
            <strong>{r.user}</strong>: {r.comment} ({r.rating}★)
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ProductReview