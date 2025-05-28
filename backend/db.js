import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL, {
  ssl: {
    rejectUnauthorized: false
  },
  connection: {
    options: `-c timezone=UTC`
  },
  transform: {
    undefined: null,
  },
})

export default sql 