import fireheartPoster from "@/assets/posters/fireheart.jpg";
import tomhollandIMG from "@/assets/actors/tom-holland.jpg";
import fireheartBg from "@/assets/slider/fireheart.jpg";
import fireheartMediumIMG from "@/assets/posters/medium/fireheart.jpg";
import {
  ICard,
  ICards,
  IGenreCollection,
  IMenuListItem,
  IMovieMedium,
  IMovieSmall,
  ISlide,
} from "@/types/types";

export const NavigationListItems: IMenuListItem[] = [
  {
    title: "Home",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M22.5447 11.8198L12.5489 1.24093C12.4769 1.16456 12.3914 1.10396 12.2973 1.06262C12.2032 1.02128 12.1023 1 12.0005 1C11.8986 1 11.7977 1.02128 11.7036 1.06262C11.6095 1.10396 11.524 1.16456 11.452 1.24093L1.45623 11.8198C1.16502 12.1282 1 12.5471 1 12.984C1 13.8913 1.69648 14.629 2.55312 14.629H3.60633V22.1775C3.60633 22.6325 3.95335 23 4.38289 23H10.4473V17.2428H13.1653V23H19.618C20.0476 23 20.3946 22.6325 20.3946 22.1775V14.629H21.4478C21.8603 14.629 22.2559 14.4568 22.5471 14.1458C23.1514 13.5032 23.1514 12.4623 22.5447 11.8198Z"
          fill="black"
        />
      </svg>
    ),
    url: "/",
    id: "1",
  },
  {
    title: "Genres",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <g clipPath="url(#clip0_7_7)">
          <path
            d="M10.9397 10.9392C10.3538 11.5252 10.3538 12.4748 10.9397 13.0603C11.5252 13.6462 12.4753 13.6462 13.0608 13.0603C13.6467 12.4744 13.6467 11.5247 13.0608 10.9392C12.4748 10.3538 11.5252 10.3538 10.9397 10.9392ZM12 0.375C5.57953 0.375 0.375 5.57953 0.375 12C0.375 18.4205 5.57953 23.625 12 23.625C18.4205 23.625 23.625 18.4205 23.625 12C23.625 5.57953 18.4205 0.375 12 0.375ZM17.9128 7.31484L14.8205 14.0812C14.6709 14.4085 14.4085 14.6709 14.0812 14.8205L7.31531 17.9128C6.53484 18.2695 5.73047 17.4652 6.08719 16.6847L9.18 9.91828C9.32957 9.59105 9.59199 9.32864 9.91922 9.17906L16.6852 6.08672C17.4656 5.73047 18.2695 6.53438 17.9128 7.31484Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_7">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "/genres",
    id: "2",
  },
  {
    title: "Fresh Movies",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M12 20.25C7.46269 20.25 3.75 16.5372 3.75 12C3.75 7.46244 7.46269 3.75 12 3.75C14.2688 3.75 16.3312 4.7125 17.7754 6.22506L13.375 10.625H23V1L19.7689 4.23137C17.7754 2.23737 15.0254 1 12 1C5.95019 1 1 5.95019 1 12C1 18.0498 5.88088 23 12 23C17.0653 23 21.2679 19.6166 22.5876 15H19.6781C18.5066 18.0976 15.482 20.25 12 20.25Z"
          fill="black"
        />
      </svg>
    ),
    url: "/fresh-movies",
    id: "3",
  },
  {
    title: "Trends",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M12 24C16.971 24 21 21 21 15.75C21 13.5 20.25 9.75 17.25 6.75C17.625 9 15.375 9.75 15.375 9.75C16.5 6 13.5 0.75 9 0C9.5355 3 9.75 6 6 9C4.125 10.5 3 13.0935 3 15.75C3 21 7.029 24 12 24ZM12 22.5C9.5145 22.5 7.5 21 7.5 18.375C7.5 17.25 7.875 15.375 9.375 13.875C9.1875 15 10.5 15.75 10.5 15.75C9.9375 13.875 11.25 10.875 13.5 10.5C13.2315 12 13.125 13.5 15 15C15.9375 15.75 16.5 17.046 16.5 18.375C16.5 21 14.4855 22.5 12 22.5Z"
          fill="black"
        />
      </svg>
    ),
    url: "/trends-movies",
    id: "4",
  },
  {
    title: "About Us",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 18.0938C11.482 18.0938 11.0625 17.6742 11.0625 17.1562C11.0625 16.6383 11.482 16.2188 12 16.2188C12.518 16.2188 12.9375 16.6383 12.9375 17.1562C12.9375 17.6742 12.518 18.0938 12 18.0938ZM13.4742 12.9492C13.262 13.0312 13.0793 13.1752 12.9501 13.3625C12.821 13.5498 12.7512 13.7717 12.75 13.9992V14.5312C12.75 14.6344 12.6656 14.7188 12.5625 14.7188H11.4375C11.3344 14.7188 11.25 14.6344 11.25 14.5312V14.0273C11.25 13.4859 11.407 12.9516 11.7164 12.5062C12.0188 12.0703 12.4406 11.7375 12.9375 11.5477C13.7344 11.2406 14.25 10.5727 14.25 9.84375C14.25 8.81016 13.2398 7.96875 12 7.96875C10.7602 7.96875 9.75 8.81016 9.75 9.84375V10.0219C9.75 10.125 9.66562 10.2094 9.5625 10.2094H8.4375C8.33437 10.2094 8.25 10.125 8.25 10.0219V9.84375C8.25 8.92266 8.65312 8.0625 9.38437 7.42266C10.0875 6.80625 11.0156 6.46875 12 6.46875C12.9844 6.46875 13.9125 6.80859 14.6156 7.42266C15.3469 8.0625 15.75 8.92266 15.75 9.84375C15.75 11.1984 14.857 12.4172 13.4742 12.9492Z"
          fill="black"
        />
      </svg>
    ),
    url: "/about-us",
    id: "5",
  },
];

export const GenresListItems: IMenuListItem[] = [
  {
    title: "Comedy",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM5.553 11.105L8.012 9.876L6.445 8.832L7.554 7.168L10.554 9.168C10.6998 9.26517 10.8176 9.39897 10.8954 9.55598C10.9733 9.71299 11.0085 9.88771 10.9976 10.0626C10.9866 10.2375 10.9299 10.4065 10.8331 10.5526C10.7363 10.6987 10.6028 10.8168 10.446 10.895L6.446 12.895L5.553 11.105ZM12 18C8 18 7 14 7 14H17C17 14 16 18 12 18ZM17.553 12.895L13.553 10.895C13.3962 10.8168 13.2627 10.6987 13.1659 10.5526C13.0691 10.4065 13.0124 10.2375 13.0014 10.0626C12.9905 9.88771 13.0257 9.71299 13.1036 9.55598C13.1814 9.39897 13.2992 9.26517 13.445 9.168L16.445 7.168L17.554 8.832L15.988 9.876L18.447 11.105L17.553 12.895Z"
          fill="black"
        />
      </svg>
    ),
    url: "/genres/comedy",
    id: "1",
  },
  {
    title: "Cartoons",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M16 4C16 2.89 16.89 2 18 2C19.11 2 20 2.89 20 4C20 5.11 19.11 6 18 6C16.89 6 16 5.11 16 4ZM20 22V16H22.5L19.96 8.37C19.8262 7.97171 19.571 7.62536 19.2302 7.37962C18.8894 7.13389 18.4802 7.00113 18.06 7H17.94C17.5195 6.99962 17.1095 7.13179 16.7684 7.37774C16.4274 7.62369 16.1725 7.97089 16.04 8.37L15.18 10.95C16.26 11.55 17 12.68 17 14V22H20ZM12.5 11.5C13.33 11.5 14 10.83 14 10C14 9.17 13.33 8.5 12.5 8.5C11.67 8.5 11 9.17 11 10C11 10.83 11.67 11.5 12.5 11.5ZM5.5 6C6.61 6 7.5 5.11 7.5 4C7.5 2.89 6.61 2 5.5 2C4.39 2 3.5 2.89 3.5 4C3.5 5.11 4.39 6 5.5 6ZM7.5 22V15H9V9C9 7.9 8.1 7 7 7H4C2.9 7 2 7.9 2 9V15H3.5V22H7.5ZM14 22V18H15V14C15 13.18 14.32 12.5 13.5 12.5H11.5C10.68 12.5 10 13.18 10 14V18H11V22H14Z"
          fill="black"
        />
      </svg>
    ),
    url: "/genres/cartoons",
    id: "2",
  },
  {
    title: "Horror",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M12 2C15.5 2 18 5 19 8C22 9 23 11.73 23 14L20.225 14.793C20.0162 14.8527 19.8325 14.9788 19.7017 15.1522C19.5709 15.3256 19.5001 15.5368 19.5 15.754V17.25C19.5 17.7141 19.3156 18.1592 18.9874 18.4874C18.6592 18.8156 18.2141 19 17.75 19H17.154C16.8236 18.9999 16.4983 19.0818 16.2073 19.2381C15.9162 19.3945 15.6684 19.6205 15.486 19.896C14.558 21.3 13.396 22 12 22C10.604 22 9.442 21.299 8.514 19.896C8.33162 19.6205 8.08382 19.3945 7.79275 19.2381C7.50168 19.0818 7.17641 18.9999 6.846 19H6.25C5.78587 19 5.34075 18.8156 5.01256 18.4874C4.68437 18.1592 4.5 17.7141 4.5 17.25V15.754C4.4999 15.5368 4.4291 15.3256 4.2983 15.1522C4.1675 14.9788 3.98381 14.8527 3.775 14.793L1 14C1 11.734 2 9 5 8C6 5 8.5 2 12 2ZM12 12C11.172 12 10.5 13.12 10.5 14.5C10.5 15.88 11.172 17 12 17C12.828 17 13.5 15.88 13.5 14.5C13.5 13.12 12.828 12 12 12ZM9.5 8C9.10218 8 8.72064 8.15804 8.43934 8.43934C8.15804 8.72064 8 9.10218 8 9.5C8 9.89782 8.15804 10.2794 8.43934 10.5607C8.72064 10.842 9.10218 11 9.5 11C9.89782 11 10.2794 10.842 10.5607 10.5607C10.842 10.2794 11 9.89782 11 9.5C11 9.10218 10.842 8.72064 10.5607 8.43934C10.2794 8.15804 9.89782 8 9.5 8ZM14.5 8C14.1022 8 13.7206 8.15804 13.4393 8.43934C13.158 8.72064 13 9.10218 13 9.5C13 9.89782 13.158 10.2794 13.4393 10.5607C13.7206 10.842 14.1022 11 14.5 11C14.8978 11 15.2794 10.842 15.5607 10.5607C15.842 10.2794 16 9.89782 16 9.5C16 9.10218 15.842 8.72064 15.5607 8.43934C15.2794 8.15804 14.8978 8 14.5 8Z"
          fill="black"
        />
      </svg>
    ),
    url: "/genres/horror",
    id: "3",
  },
  {
    title: "Fantasy",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <g clipPath="url(#clip0_7_12)">
          <path
            d="M9.77917 3.11248L8.20833 3.69998C8.08333 3.74581 8 3.86665 8 3.99998C8 4.13331 8.08333 4.25415 8.20833 4.29998L9.77917 4.88748L10.3667 6.45831C10.4125 6.58331 10.5333 6.66665 10.6667 6.66665C10.8 6.66665 10.9208 6.58331 10.9667 6.45831L11.5542 4.88748L13.125 4.29998C13.25 4.25415 13.3333 4.13331 13.3333 3.99998C13.3333 3.86665 13.25 3.74581 13.125 3.69998L11.5542 3.11248L10.9667 1.54165C10.9208 1.41665 10.8 1.33331 10.6667 1.33331C10.5333 1.33331 10.4125 1.41665 10.3667 1.54165L9.77917 3.11248ZM1.92083 17.8083C1.14167 18.5875 1.14167 19.8541 1.92083 20.6375L3.3625 22.0791C4.14167 22.8583 5.40833 22.8583 6.19167 22.0791L22.0792 6.18748C22.8583 5.40831 22.8583 4.14165 22.0792 3.35831L20.6375 1.92081C19.8583 1.14165 18.5917 1.14165 17.8083 1.92081L1.92083 17.8083ZM20.1917 4.77498L15.8167 9.14998L14.8458 8.17915L19.2208 3.80415L20.1917 4.77498ZM0.3125 6.21665C0.125 6.28748 0 6.46665 0 6.66665C0 6.86665 0.125 7.04581 0.3125 7.11665L2.66667 7.99998L3.55 10.3541C3.62083 10.5416 3.8 10.6666 4 10.6666C4.2 10.6666 4.37917 10.5416 4.45 10.3541L5.33333 7.99998L7.6875 7.11665C7.875 7.04581 8 6.86665 8 6.66665C8 6.46665 7.875 6.28748 7.6875 6.21665L5.33333 5.33331L4.45 2.97915C4.37917 2.79165 4.2 2.66665 4 2.66665C3.8 2.66665 3.62083 2.79165 3.55 2.97915L2.66667 5.33331L0.3125 6.21665ZM14.9792 16.8833C14.7917 16.9541 14.6667 17.1333 14.6667 17.3333C14.6667 17.5333 14.7917 17.7125 14.9792 17.7833L17.3333 18.6666L18.2167 21.0208C18.2875 21.2083 18.4667 21.3333 18.6667 21.3333C18.8667 21.3333 19.0458 21.2083 19.1167 21.0208L20 18.6666L22.3542 17.7833C22.5417 17.7125 22.6667 17.5333 22.6667 17.3333C22.6667 17.1333 22.5417 16.9541 22.3542 16.8833L20 16L19.1167 13.6458C19.0458 13.4583 18.8667 13.3333 18.6667 13.3333C18.4667 13.3333 18.2875 13.4583 18.2167 13.6458L17.3333 16L14.9792 16.8833Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_12">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    url: "/genres/fantasy",
    id: "4",
  },
];

export const GeneralListItems: IMenuListItem[] = [
  {
    title: "Create Account",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z"
          fill="black"
        />
        <path
          d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z"
          fill="black"
        />
      </svg>
    ),
    url: "/auth/register",
    id: "1",
  },
  {
    title: "Sign In",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon--filled"
      >
        <path
          d="M4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.59L10.29 8.71C10.1968 8.61676 10.1228 8.50607 10.0723 8.38425C10.0219 8.26243 9.99591 8.13186 9.99591 8C9.99591 7.86814 10.0219 7.73757 10.0723 7.61575C10.1228 7.49393 10.1968 7.38324 10.29 7.29C10.3832 7.19676 10.4939 7.1228 10.6158 7.07234C10.7376 7.02188 10.8681 6.99591 11 6.99591C11.1319 6.99591 11.2624 7.02188 11.3842 7.07234C11.5061 7.1228 11.6168 7.19676 11.71 7.29L15.71 11.29C15.801 11.3851 15.8724 11.4972 15.92 11.62C16.02 11.8635 16.02 12.1365 15.92 12.38C15.8724 12.5028 15.801 12.6149 15.71 12.71L11.71 16.71C11.617 16.8037 11.5064 16.8781 11.3846 16.9289C11.2627 16.9797 11.132 17.0058 11 17.0058C10.868 17.0058 10.7373 16.9797 10.6154 16.9289C10.4936 16.8781 10.383 16.8037 10.29 16.71C10.1963 16.617 10.1219 16.5064 10.0711 16.3846C10.0203 16.2627 9.9942 16.132 9.9942 16C9.9942 15.868 10.0203 15.7373 10.0711 15.6154C10.1219 15.4936 10.1963 15.383 10.29 15.29L12.59 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12ZM7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15C5.26522 15 5.51957 15.1054 5.70711 15.2929C5.89464 15.4804 6 15.7348 6 16V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V8C6 8.26522 5.89464 8.51957 5.70711 8.70711C5.51957 8.89464 5.26522 9 5 9C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8V5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2Z"
          fill="black"
        />
      </svg>
    ),
    url: "/auth/login",
    id: "2",
  },
];

export const PopularMoviesItems: IMovieSmall[] = [
  {
    title: "Fireheart",
    genres: ["Cartoons", "Comedy"],
    image: fireheartPoster,
    rating: 4.1,
    url: "/",
    id: "1",
  },
  {
    title: "Fireheart",
    genres: ["Cartoons", "Comedy"],
    image: fireheartPoster,
    rating: 4.1,
    url: "/",
    id: "2",
  },
  {
    title: "Fireheart",
    genres: ["Cartoons", "Comedy"],
    image: fireheartPoster,
    rating: 4.1,
    url: "/",
    id: "3",
  },
];

export const Slides: ISlide[] = [
  {
    title: "Fireheart",
    genres: ["Cartoons", "Comedy"],
    url: "/",
    bgImage: fireheartBg,
    id: "1",
  },
];

export const CardsFilms: ICards = {
  cards: [
    {
      image: fireheartPoster,
      altImage: "fireheart",
      hoverTitle: "Fireheart",
      url: "/",
      id: "1",
    },
    {
      image: fireheartPoster,
      altImage: "fireheart",
      hoverTitle: "Fireheart",
      url: "/",
      id: "2",
    },
    {
      image: fireheartPoster,
      altImage: "fireheart",
      hoverTitle: "Fireheart",
      url: "/",
      id: "3",
    },
    {
      image: fireheartPoster,
      altImage: "fireheart",
      hoverTitle: "Fireheart",
      url: "/",
      id: "4",
    },
    {
      image: fireheartPoster,
      altImage: "fireheart",
      hoverTitle: "Fireheart",
      url: "/",
      id: "5",
    },
  ],
  href: "/trends",
  title: "Trending Now",
};

export const CardsActors: ICards = {
  cards: [
    {
      image: tomhollandIMG,
      altImage: "tom-holland",
      hoverTitle: "Tom Holland",
      hoverSubtitle: "+2 movies",
      url: "/",
      id: "1",
    },
    {
      image: tomhollandIMG,
      altImage: "tom-holland",
      hoverTitle: "Tom Holland",
      hoverSubtitle: "+2 movies",
      url: "/",
      id: "2",
    },
    {
      image: tomhollandIMG,
      altImage: "tom-holland",
      hoverTitle: "Tom Holland",
      hoverSubtitle: "+2 movies",
      url: "/",
      id: "3",
    },
  ],
  href: "/actors",
  title: "Best actors",
};

export const CardsGenres: ICards = {
  cards: [
    {
      image: fireheartPoster,
      altImage: "horror",
      hoverTitle: "Horror",
      url: "/",
      id: "1",
    },
    {
      image: fireheartPoster,
      altImage: "action",
      hoverTitle: "Action",
      url: "/",
      id: "2",
    },
  ],
  href: "/genres",
  title: "Genres",
};

export const FreshMoviesItems: IMovieMedium[] = [
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "1",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "2",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "3",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "4",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "5",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "6",
  },
];

export const TrendingMoviesItems: IMovieMedium[] = [
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "1",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "2",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "3",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "4",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "5",
  },
  {
    title: "Fireheart",
    image: fireheartMediumIMG,
    url: "/",
    id: "6",
  },
];

export const GenresCollectionItems: IGenreCollection[] = [
  {
    genreTitle: "Cartoons",
    url: "genres/cartoons",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
  {
    genreTitle: "Horror",
    url: "genres/horror",
    movies: [
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "1",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "2",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "3",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "4",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "5",
      },
      {
        title: "Fireheart",
        image: fireheartMediumIMG,
        url: "/",
        id: "6",
      },
    ],
  },
];
