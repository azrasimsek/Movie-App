import WatchMovie from "./WatchMovie";

export default function WatchList({watchListMovies , isWatchListOpen, onRemoveFromWatchList}) {
  return (
    <> 
      {
        isWatchListOpen && (
          <div className="container my-3">
              <div className="card">
                <div className="card-header">
                  <h2 className="title h5 mb-0">Watch List</h2>
                </div>
                <div className="card-body">
                  {watchListMovies.filter((m) => m.is_active).length == 0 ? (
                    <div>Film bulunamadı</div>
                  ) : (
                    <div
                      id="movie-list"
                      className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
                    >
                      {watchListMovies.map((m, index) => (
                        <WatchMovie key={index} movieObj={m} onRemoveFromWatchList={onRemoveFromWatchList}/>
                      ))}
                    </div>
                  )}
                </div>
              </div>
          </div>
        )
      }
    
    </>
  );
}
