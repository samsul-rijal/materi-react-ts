
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex justify-center">
      <h1>Copyright {year} Samsul Rijal</h1>
    </div>
  )
}

export default Footer
