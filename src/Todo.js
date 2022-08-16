import React from 'react'

export default function Todo({ todo }) {
  return (
    <div>
        <lebal>
            <input type="checkbox" checked={todo.complete} />
            {todo.name}
        </lebal>
    </div>
  )
}
