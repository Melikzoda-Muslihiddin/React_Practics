import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getImageUrl } from "../../utils/getImageUrl";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InfoGallery = ({ images = [], onDeleteImage, deletingImageId }) => {
  const hasManyImages = images.length > 1;

  return (
    <div className="min-w-0 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
        Gallery
      </p>

      <h2 className="mb-6 text-2xl font-black uppercase">Todo Images</h2>

      {images.length > 0 ? (
        <>
          <div className="min-w-0 overflow-hidden rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={hasManyImages}
              pagination={{ clickable: true }}
              autoplay={
                hasManyImages
                  ? {
                      delay: 2500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              loop={hasManyImages}
              spaceBetween={20}
              slidesPerView={1}
              observer={true}
              observeParents={true}
              className="info-swiper"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="overflow-hidden rounded-xl border border-black/10 bg-[#f7f7f7]">
                    <div className="flex h-105 w-full items-center justify-center overflow-hidden bg-[#f3f3f3]">
                      <img
                        src={getImageUrl(image.imageName)}
                        alt={image.imageName}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.id}
                className="rounded-xl border border-black/10 bg-[#fafafa] p-3"
              >
                <div className="mb-3 flex h-45 w-full items-center justify-center overflow-hidden rounded-xl bg-[#f3f3f3]">
                  <img
                    src={getImageUrl(image.imageName)}
                    alt={image.imageName}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-3 break-all text-sm text-black/60">
                  {image.imageName}
                </div>

                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteOutlineOutlinedIcon />}
                  disabled={deletingImageId === image.id}
                  onClick={() => onDeleteImage(image.id)}
                  fullWidth
                >
                  {deletingImageId === image.id
                    ? "Deleting..."
                    : "Delete image"}
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-black/20 p-10 text-center text-black/60">
          No images found
        </div>
      )}
    </div>
  );
};

export default InfoGallery;
