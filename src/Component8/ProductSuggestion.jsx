import React from 'react'

function ProductSuggestion() {
    const suggestions = ['Bluetooth Speaker', 'Wired Headphones', 'Phone Stand'];
  return (
   <>
   <div>
   <h3>You Might Also Like</h3>
      <ul>
        {suggestions.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
   </div>
   </>
  )
}

export default ProductSuggestion