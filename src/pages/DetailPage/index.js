import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from 'store/modules/movie/action';

const PosterModal = props => {
  const {isOpen, toggle ,posterId} = props;
  return (
    <div className={isOpen ? 'modal show': 'modal'}>
      <div className="modal-content show">
        <span className="close" onClick={toggle}>&times;</span>
        <img src={`http://img.omdbapi.com/?apikey=394df02c&i=${posterId}`} />
      </div>
    </div>
  );
}

PosterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  posterId: PropTypes.string.isRequired
}

const DetailPage = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.current);
  const {currentMovie} = current;
  const movie = useSelector(state => state.movie);
  const {detail = {}} = movie;
  const [posterModal, setPosterModal] = useState(false);
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    dispatch(getMovieDetail({id: currentMovie}));
  }, [true]);

  useEffect(() => {
   if(detail) {
     setDetailMovie(currValue => currValue = detail);
   }
  }, [detail]);

  const togglePosterModal = ()=> {
    setPosterModal(currValue => !currValue);
  }

  const renderList = list => {
    if(list) {
      return list.map((el, index) => {
        const {Source, Value} = el;
        return (
          <div key={index} className='rating-list'>
            <div>{Source}</div>
            <div>{Value}</div>
          </div>
        );
      })
    }
    return null
  }

  if (detailMovie) {
    const {
      Poster, 
      Title, 
      Genre, 
      Year, 
      Actors, 
      Director, 
      Language, 
      Production, 
      Metascore,
      Awards,
      Writer,
      Runtime,
      Ratings,
      Plot,
      imdbID
    } = detailMovie;
    return (
      <div className='body'>
        <div className='container'>
          <div className='detail-page'>
            <div className='detail-header'>
              <div for='poster' onClick={togglePosterModal}>
                <img id='poster' src={Poster} width='250px' />
              </div>
              <div>
                <h2><strong>{Title}</strong></h2>
                <table>
                  <tr>
                    <td>Genre</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Genre}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Year}</td>
                  </tr>
                  <tr>
                    <td>Metascore</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Metascore}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Runtime}</td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Director}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Actors}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Language}</td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Production}</td>
                  </tr>
                  <tr>
                    <td>Awards</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Awards}</td>
                  </tr>
                  <tr>
                    <td>Writer</td>
                    <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                    <td>{Writer}</td>
                  </tr>
                </table>
                <div className='detail-rating'>
                  {renderList(Ratings)}
                </div>
              </div>
            </div>
            <div className='detail-plot'>
              <h4>Plot :</h4>
              <p>{Plot}</p>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div for='link' className='detail-back'>
              <a id='link' href='/'>Back</a>
            </div>
          </div>
        </div>
        <PosterModal isOpen={posterModal} toggle={togglePosterModal} posterId={imdbID} />
      </div>
    )
  }
}

export default DetailPage;