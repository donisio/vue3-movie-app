# Movie 사이트 구성

## Vue Route 구성 <br />
 - Vue Router는 Vue.js 애플리케이션에서 라우팅 및 페이지 네비게이션을 처리하는 라이브러리입니다.<br /><br />
 - 라우터를 사용하여 다양한 URL에 대한 컴포넌트를 매핑하고, 사용자가 애플리케이션 내에서 다른 페이지로 이동할 수 있도록 합니다.<br /><br />
 - 주요 구성 요소:
    - Routes: URL 경로와 해당 경로에 대한 컴포넌트 매핑을 정의합니다.
    - Router View: 라우터가 현재 URL에 대해 어떤 컴포넌트를 표시할지 결정하는 영역입니다.
    - Router Link: 사용자가 페이지 간 이동할 때 사용되는 링크 컴포넌트입니다.
    - Navigation Guards: 라우터 이벤트 전/후에 실행되는 함수로, 인증, 권한 관리 및 페이지 전환 로직을 추가할 수 있습니다.<br /><br />
 - Vue Router를 사용하면 싱글 페이지 애플리케이션 (SPA)에서 다중 페이지 애플리케이션처럼 느껴지는 사용자 경험을 제공할 수 있으며, 애플리케이션 내에서 페이지 간의 이동을 관리합니다.

[Route 관련 홈페이지](https://v3.router.vuejs.org/kr/installation.html)

 ## Route 설치
```shell batch 
npm i vue-router@4
```
## Route 설정
``` 
src/routers  // 생성
src/routers/index.js //생성
src/routers/Home.vue //생성
src/routers/About.vue //생성
src/routers/Movie.vue //생성
```
``` javascript
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import About from './About';
import Movie from './Movie';

export default createRouter({
    // Hash( Hash ( "#" )을 사용 하여 페이지 구성)
    // https://google.com/#/search
    history: createWebHashHistory(),
    // pages( Server Side를 설정 해야함)
    // https://google.com/
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie',
            component: Movie
        },
        {
            path: '/about',
            component: About
        },
       
    ]
})
```
# RouterLink 설정
`RouterLink`는 Vue Router에서 제공하는 디렉티브 중 하나로, Vue.js 애플리케이션에서 페이지 간의 내비게이션을 할 때 사용하는 요소입니다. `RouterLink`를 사용하면 사용자가 링크를 클릭하거나 버튼을 눌렀을 때 라우터가 관리하는 페이지로 이동할 수 있습니다. 주로 HTML 요소에 `to` 속성을 설정하여 목적지 경로를 지정합니다.

예를 들어, 다음은 `RouterLink`를 사용하여 라우터가 관리하는 다른 페이지로 이동하는 간단한 예제입니다:

```html
<template>
  <div>
    <!-- "to" 속성을 사용하여 /about 경로로 이동하는 링크 생성 -->
    <router-link to="/about">About 페이지로 이동</router-link>
  </div>
</template>
```

위의 코드에서 `<router-link>` 요소는 사용자에게 "About 페이지로 이동"이라고 표시된 링크를 생성하고, 사용자가 이 링크를 클릭하면 `/about` 경로로 이동합니다.

`RouterLink`는 Vue Router의 기능을 활용하여 현재 활성화된 링크에 대한 스타일링 및 클래스 추가와 같은 추가적인 기능도 제공합니다. 이렇게 하면 현재 페이지를 나타내는 메뉴 항목을 강조 표시하는 등의 작업을 쉽게 수행할 수 있습니다.

`RouterLink`를 사용하면 라우터와 상호작용하는 링크 및 버튼을 쉽게 생성할 수 있으므로 Vue.js 애플리케이션에서 페이지 간의 내비게이션을 구현하는 데 유용합니다.

# Vue 형제 Node간 데이터 연동
Vue.js에서 형제 컴포넌트 간에 데이터를 공유하려면 부모 컴포넌트를 통해 데이터를 전달하거나 중앙 상태 관리 도구인 Vuex를 사용하는 방법 등이 있습니다. 각 방법에 대해 간단히 설명하겠습니다.

1. **부모 컴포넌트를 통한 데이터 전달:**
   이 방법은 두 개의 형제 컴포넌트가 같은 부모 컴포넌트 내에 있을 때 사용됩니다. 부모 컴포넌트에서 데이터를 관리하고, 해당 데이터를 자식 컴포넌트에 props로 전달하는 방식입니다.

   ```vue
   <!-- 부모 컴포넌트 -->
   <template>
     <div>
       <child-component-1 :dataProp="sharedData"></child-component-1>
       <child-component-2 :dataProp="sharedData"></child-component-2>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         sharedData: "공유 데이터"
       };
     }
   };
   </script>
   ```

   ```vue
   <!-- 자식 컴포넌트 1 -->
   <template>
     <div>
       <p>자식 컴포넌트 1: {{ dataProp }}</p>
     </div>
   </template>
   
   <script>
   export default {
     props: ["dataProp"]
   };
   </script>
   ```

   ```vue
   <!-- 자식 컴포넌트 2 -->
   <template>
     <div>
       <p>자식 컴포넌트 2: {{ dataProp }}</p>
     </div>
   </template>
   
   <script>
   export default {
     props: ["dataProp"]
   };
   </script>
   ```

2. **Vuex를 사용한 데이터 공유:**
   Vuex는 Vue.js 애플리케이션 전체에서 데이터를 중앙 집중식으로 관리하는 데 사용됩니다. 형제 컴포넌트 간의 데이터 공유를 위해서도 유용합니다.

   ```javascript
   // store.js (Vuex 스토어)
   import Vue from "vue";
   import Vuex from "vuex";
   
   Vue.use(Vuex);
   
   export default new Vuex.Store({
     state: {
       sharedData: "공유 데이터"
     },
     mutations: {
       updateData(state, newData) {
         state.sharedData = newData;
       }
     },
     actions: {
       updateSharedData(context, newData) {
         context.commit("updateData", newData);
       }
     }
   });
   ```

   ```vue
   <!-- 자식 컴포넌트 1 -->
   <template>
     <div>
       <p>자식 컴포넌트 1: {{ sharedData }}</p>
       <button @click="updateData">데이터 업데이트</button>
     </div>
   </template>
   
   <script>
   export default {
     computed: {
       sharedData() {
         return this.$store.state.sharedData;
       }
     },
     methods: {
       updateData() {
         this.$store.dispatch("updateSharedData", "새로운 데이터");
       }
     }
   };
   </script>
   ```

   ```vue
   <!-- 자식 컴포넌트 2 -->
   <template>
     <div>
       <p>자식 컴포넌트 2: {{ sharedData }}</p>
     </div>
   </template>
   
   <script>
   export default {
     computed: {
       sharedData() {
         return this.$store.state.sharedData;
       }
     }
   };
   </script>
   ```

위의 두 가지 방법 중 하나를 선택하여 형제 컴포넌트 간에 데이터를 공유할 수 있습니다. 부모 컴포넌트를 통한 데이터 전달은 간단하지만 중앙 상태 관리 도구인 Vuex를 사용하면 더 복잡하고 확장 가능한 애플리케이션에서 데이터 공유를 관리하기가 훨씬 쉬워집니다.  

# vuex
Vuex는 Vue.js 애플리케이션에서 상태 관리를 위한 라이브러리로, 애플리케이션 내의 데이터를 중앙 집중식으로 관리하고 상태 관리를 효율적으로 구현할 수 있도록 도와주는 도구입니다. Vuex는 공식 Vue.js 라이브러리이며 Vue.js 애플리케이션에서 상태 관리를 간편하게 구현할 수 있도록 설계되었습니다.

Vuex의 주요 구성 요소와 역할은 다음과 같습니다:

1. **State (상태):** 애플리케이션의 데이터를 저장하는 중앙 집중식 저장소입니다. 여러 컴포넌트에서 이 상태에 접근할 수 있고, 상태를 변경하거나 가져올 수 있습니다.

2. **Mutations (변이):** 상태를 변경하는 동기적인 작업을 정의합니다. Mutations는 상태를 변경하는 유일한 방법이며, 추적 가능하게 만들어 예측 가능한 상태 변이를 보장합니다.

3. **Actions (액션):** 비동기 작업을 수행하거나 여러 뮤테이션을 연달아 실행할 때 사용됩니다. 액션은 비동기 로직을 처리하고 결과를 커밋하는 역할을 합니다.

4. **Getters (게터):** 상태를 가공하고 계산된 속성을 제공하는 함수입니다. 상태를 조작하거나 계산하는 데 사용됩니다.

5. **Modules (모듈):** 대규모 애플리케이션의 경우 상태를 모듈로 구성하여 코드를 구조화하고 유지보수를 쉽게 만들 수 있습니다. 모듈은 각각의 상태, 뮤테이션, 액션, 게터를 가질 수 있는 독립된 Vuex 스토어를 정의합니다.

Vuex를 사용하면 애플리케이션 내에서 상태 변이를 추적하고, 다양한 컴포넌트 간에 데이터를 공유하며, 비동기 작업을 처리하고 예측 가능한 방식으로 상태를 변경할 수 있습니다. 이를 통해 복잡한 상태 관리를 관리하기 쉽게 만들고, Vue.js 애플리케이션을 보다 효율적으로 개발할 수 있습니다.

``` shell
npm i vuex@next

src/store // 디렉토리 생성
src/store/index.js // 파일 생성
```
``` javascript
// index.js
import { createStore } from 'vuex';
import movie from './movie';
import about from './about'

export default createStore({
    modules: {
        movie: movie,
        about: about
    }
})
```
``` shell
src/store/movie.js // 파일 생성
src/store/about.js // 파일 생성
```

# Movie List 구성

 - src/comopnents/Search.vue File
1. Input Box 입력후 'Apply'버튼을 클릭하면, Search.vue의 method 'apply()'를 호출
2. 
    ```javascript
    // vuex에 설정 변수를 사용 할수 있도록 payload에 파라미터 설정
    async apply(){
        this.$store.dispatch('movie/searchMovies', { 
            title: this.title,
            type: this.type,
            number: this.number,
            year: this.year,
    });
    ```
3. vuex에 설정된 'src/store/movie.js'호출 
    ``` javascript
    .....
    // Seach.vue에서 전달된 파라미터를 통해 API 호출
     actions: {
       async searchMovies({ commit }, payload){
            const { title, type, number, year} = payload;
            const OMDB_API_KEY= 'XXXXXXXX'
            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${number}`)
            console.log(res);
            const { Search } = res.data;
            commit( 'updateState', {
                movies: Search
            })            
        }
    },
    .....
    ```
4. 'commit'함수를 통해 데이터 수정 권한이 있는 mutations(변이)함수를 자동으로 호출
    ```javascript
    .....
    // commit을 통해 데이터 변경
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
    .....
    ```
5. 형제 노드인 Search를 통해 API호출 후 vuex(스토어)를 이용 하여 형제 노드인 MovieLise 컨포넌트로 Date 전달함
    ```javascript
    src/components/MovieList.vue
    <template>
        <div class="container">
            <div class="inner">
                <Movieitem 
                    v-for="movie in movies" 
                    :key="movie.imdbID"
                    :movie="movie"
                />
            </div>
        </div>
    </template>

    <script>
        import Movieitem from '~/components/Movieitem';
        export default{
            components: {
                Movieitem
            },
            data(){
                return {
                    movies: []
                };
            },
            computed: {
                movies(){
                    // store에서 전달된 데이터를 계산된 데이터로서 전달
                    return this.$store.state.movie.movies;
                }
            }
        }
    </script>
    ```
5. MovieList의 자식 노드 MovieItem.vue의 props를 통해 화면에 표출
    ```javascript
    src/components/MovieItem.vue
    <template>
        <div>{{ movie.Title }}</div>
    </template>
    <script>
        export default{
            props:{
                movie: {
                    type: Object,
                    default: () => {
                        return {};
                    }
                }
            }
        }
    </script>
    ```