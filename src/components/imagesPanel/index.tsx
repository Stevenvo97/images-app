import {
  StyledContainer,
  StyledImage,
  StyledWrapGrid,
  StyledWrapImage,
} from "./index.styled";
import { Image } from "../../interfaces/types";
import { formatImages } from "../../api/dataTransform";
import { useEffect, useState } from "react";
import { callApi, getApiPath } from "../../api/utils";
import { PATHS } from "../../api/paths";

import { useAnimation } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

import { useInView } from "react-intersection-observer";
export type ImageProps = {
  image: Image;
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const ImageItem = ({ image }: ImageProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const item = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { ease: [0.78, 0.14, 0.15, 0.86] },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.78, 0.14, 0.15, 0.86] },
    },
  };
  return (
    <StyledWrapImage
      variants={item}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <StyledImage src={image?.urls.full} loading="lazy" />
    </StyledWrapImage>
  );
};

const ImagesPanel = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);

  const getListImages = async (page = 1) => {
    const res = await callApi(getApiPath(PATHS.GET_IMAGES), "GET", {
      params: {
        page,
      },
    });
    if (res) {
      return formatImages(res);
    }
  };

  const handleNewPageLoad = async () => {
    const res = await getListImages(page);
    if (res) {
      setImages((current) => [...current, ...res]);
      setPage((page) => page + 1);
      return;
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getListImages(1);
      if (res) {
        setImages(res);
        setPage((page) => page + 1);
      }
    })();
  }, []);

  if (!images.length) {
    return <div>Loading...</div>;
  }

  return (
    <StyledContainer>
      <InfiniteScroll
        dataLength={images?.length}
        next={() => handleNewPageLoad()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <StyledWrapGrid animate="show" variants={container}>
          {images &&
            images?.length &&
            images?.map((image) => <ImageItem key={image.id} image={image} />)}
        </StyledWrapGrid>
      </InfiniteScroll>
    </StyledContainer>
  );
};

export { ImagesPanel };
