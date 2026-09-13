import { useCallback } from "react";
import styles from "./syles.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const nextPhotosUrlRef = useRef();

  async function fetchPhotos(url, { overwrite = false } = {}) {
    try {
      const response = await fetch(url);
      nextPhotosUrlRef.current = parseLinkHeader(
        response.headers.get("link")
      ).next;
      const photos = await response.json();
      if (overwrite) {
        setPhotos(photos);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...photos]);
      }
    } catch (error) {
      console.error(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const imageRef = useCallback((image) => {
      if (image == null || nextPhotosUrlRef.current == null) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchPhotos(nextPhotosUrlRef.current);
          observer.unobserve(image);
        }
      });
      observer.observe(image);
    }, []);

    useEffect(() => {
      fetchPhotos(`http://localhost:3000/photos?_page=1&_limit=${LIMIT}`, {
        overwrite: true,
      });
    }, []);

    return (
      <>
        {photos.map((photo) => (
          <img
            src={photo.url}
            alt={photo.id}
            key={photo.id}
            ref={index === photos.length - 1 ? imageRef : undefined}
          />
        ))}
        {isLoading &&
          Array.from({ length: LIMIT }, (_, index) => index).map((n) => {
            return (
              <div key={n} className="skeleton">
                Loading...
              </div>
            );
          })}
      </>
    );
  }
}
