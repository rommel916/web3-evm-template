import homeStyles from './index.module.scss'

const Home = () => {
  console.log(a)
  return (
    <div className={homeStyles.home}>
      H0me
      <div className={homeStyles.link}>link</div>
      <div>1asd asd1 sd1</div>
      <div className='1' style={{ color: 'red' }}>
        Home child Home child Home child Home child Ho me child Ho Home child Home child Home child
        Home child Ho me child Home childHome child Home child Home child Home child Home child Home
        child Ho me child Home childHome child Home child me childHome child Home child
      </div>
    </div>
  )
}

export default Home
