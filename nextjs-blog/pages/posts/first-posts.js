import Link from 'next/link'

export default function FirstPost() {
  return (
    <h1>
      First Post
      <h2>
        <Link href='/'>Back to home!</Link>
        {/* External Navigation  */}
        <a href='google.com'>external nav requires a tag!</a>
      </h2>
    </h1>)
}