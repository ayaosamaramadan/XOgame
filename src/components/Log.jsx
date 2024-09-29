function Log({turns,}) {
  return (
    
    <ol>
      {turns.map((turn, index) => (
        <li key={`${turn.square.row+1} ${turn.square.col+1}`}>
          {turn.player} played at {turn.square.row+1}.{turn.square.col+1}
        </li>
      ))}
    </ol>
  )
}

export default Log