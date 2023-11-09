import CustomSlider from "./components/Slider/CustomSlider";

export default async function Main() {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDJjYWU5NGI2Yzk1MWNiY2EyMmVjMTc5Y2JmZDM3ZSIsInN1YiI6IjYzZDhiNDYzM2RjMzEzMDA4MjMyZTkyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fMlQjoW-zgChmdjBWD4oB0mHbaJ4fRjmXL8XAGougHY";
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    { headers }
  );
  const data = await res.json();
  return <div>hello</div>;
}
