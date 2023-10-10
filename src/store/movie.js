import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

export default{
    // module store에서 모듈로서 사용이 가능 하다
    namespaced: true,
    // data
    state: () => {
        return {
            movies : [],
            message: '',
            loading: false
        }
    },
    // computed!
    getters: {
        // movieIds( state ){
        //     return state.movies.map(m => m.imdbID)
        // }
    },
    // methods!
    // 변이 
    // 해당 부분만이 데이터 수정 권한이 있다.
    //다른 부분에서는 데이터를 수정 권한이 없다.
    mutations: {
        updateState(state, payload){
            Object.keys(payload).forEach((key)=>{
                state[key] = payload[key]
            })
        },

        resetMovies(state){
            state.movies = [];
        }
    },
    // 비동기로 동작 한다.
    actions: {
        /*
        searchMovies(context){
            context.state
            context.getters
            context.mutations
        }
        */
       // 객체 분해를 해서 사용 용도로 사용 하는 편이 좋다
       async searchMovies({ state, commit }, payload){
            
            const OMDB_API_KEY= '1d4b6ef6'
           try{
            const res = await _fetchmovie({ ...payload, page: 1 });
            
            const { Search, totalResults } = res.data;
            commit( 'updateState', {
                movies: _uniqBy(Search, 'imdbID')
            })  
            
            console.log(res, totalResults);
            const total = parseInt(totalResults, 10);
            const pageLength = Math.ceil(total/10);

            if(pageLength > 1){
                for(let page = 2; page <= pageLength; page +=1){
                    if(page > payload.number / 10 ){
                        break;
                    }
                    const res = await _fetchmovie({ ...payload, page: page });
                    const { Search } = res.data;
                    commit( 'updateState', {
                        movies: [...state.movies, ..._uniqBy(Search, 'imdbID') ]
                    }) 
                }

            }

           } catch(message){
                commit('updateState',
                {
                    movies:[],
                    message:message
                })
           }
        }
    },
}

function _fetchmovie(payload){
    const {title, type, page, year} = payload;
    const OMDB_API_KEY= '1d4b6ef6'
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
    return new Promise((resolve, reject)=>{
        axios.get( url ).then((res)=>{
            if( res.data.Error ){
                reject( res.data.Error );
            }
            resolve(res);
        }).catch(( error )=>{
            reject(error.message);
        });

    });
}