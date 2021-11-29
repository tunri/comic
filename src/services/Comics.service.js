import http from "@/helpers/http";

const ComicsService = {
    GetComic(comicId) {
        return http.get(`/https://xkcd.com/${comicId}/info.0.json`);
    },
};

export default ComicsService;