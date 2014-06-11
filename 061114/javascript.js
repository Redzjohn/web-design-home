function runThatQuery()
            {
				
				console.log ("ready");

				var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?";
				var searchQuery = $( "#movieTitleID" ).val();
                var myapikey = "bwt455vx4sfpe2rkydksbajx";
               
                var moviesSearchUrl = baseUrl + 'apikey=' + myapikey;
                
                    $.ajax({
                        url: moviesSearchUrl + '&q=' + encodeURI(searchQuery),
                        dataType: "jsonp",
                        success: searchCallback
                    });
               
            }

            function searchCallback(data) {

				console.log("Ajax found some results, and now we are in searchCallback!");	
				console.log (JSON.stringify(data));

                $("#movieForm").html('<h4><i>John found ' + data.total + ' results for you.</i>');
                
                var mymovies = data.movies;
                $.each(mymovies, function(index, movie) {
                    $("#movieForm").append('<h3>' + movie.title + '</h3><img src="' + movie.posters.detailed + '"><BR>');
                });
            }