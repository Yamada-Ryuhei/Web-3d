import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Anda Pusing Dengan project? <br className='sm:block hidden' />
        Saya juga sama 
      </p>
      <Link to='https://instagram.com/sptnnhdnta' className='btn'>
        Instagram
      </Link>
    </section>
  );
};

export default CTA;
