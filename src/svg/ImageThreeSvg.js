import * as React from "react";
import Svg, { Circle, G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const ImageThreeSvg = (props) => (
    <Svg
        width={297}
        height={297}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={148.5} cy={148.5} r={148.5} fill="#F3F7FF" />
        <G clipPath="url(#a)">
            <Path
                d="m141.806 218.181-22.746-.242s-.102-.444-.211-1.174a22.634 22.634 0 0 1-.242-3.36c0-2.726.662-4.264.662-4.264l7.85-.971a39.927 39.927 0 0 0 13.761 6.509c.454.679.763 1.444.909 2.248a3.5 3.5 0 0 1 .017 1.254Z"
                fill="#5B393B"
            />
            <Path
                d="m121.653 200.452-2.44 9.632s3.069.182 4.718-.208c3.001-.728 3.154-1.793 3.154-1.793l1.627-5.276-7.059-2.355Z"
                fill="#FFD8C7"
            />
            <Path
                d="m141.806 218.181-22.746-.242s-.102-.444-.211-1.174h.063l22.727.15c.05-.004.1-.004.15 0 .082.418.088.847.017 1.266ZM148.152 151.906c-.226-.786-22.268-34.429-28.946-40.204-2.756-2.385-5.691-4.706-9.15-5.854-4.534-1.504-7.343-.853-10.331 2.741-2.698 3.244-4.541 7.392-4.03 11.688.728 5.994 5.58 10.525 10.116 14.498a364.306 364.306 0 0 0 19.231 15.682 485.494 485.494 0 0 0 5.254 3.938c1.856 1.372 2.552 3.827 1.757 5.993-2.543 6.93-5.577 16.745-6.671 20.951-1.74 6.674-3.639 12.915-5.298 19.981l12.956 4.005c5.732-13.191 10.799-26.875 14.013-40.995.493-2.149 2.474-7.925 1.099-12.424Z"
                fill="#201C1D"
            />
            <Path
                d="M136.351 220.141a.565.565 0 0 1-.565-.615.575.575 0 0 1 .109-.29l7.471-10.083a.569.569 0 1 1 .912.677l-7.471 10.081a.567.567 0 0 1-.456.23Z"
                fill="#201C1D"
            />
            <Path
                d="M121.765 218.079h13.95a1.744 1.744 0 0 1 1.737 1.735 1.741 1.741 0 0 1-1.734 1.737h-13.951a1.744 1.744 0 0 1-1.736-1.735 1.744 1.744 0 0 1 1.734-1.737Z"
                fill="#201C1D"
            />
            <Path
                d="M223.371 246.783a43.392 43.392 0 1 1 .042-86.785 43.392 43.392 0 0 1-.042 86.785Zm-.046-84.173c-22.424.012-40.655 18.263-40.643 40.687.012 22.423 18.265 40.655 40.686 40.643 22.421-.012 40.656-18.266 40.644-40.687-.013-22.421-18.264-40.65-40.692-40.638l.005-.005Z"
                fill="#3D393B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M223.5 165c-21.263 0-38.5 17.237-38.5 38.5s17.237 38.5 38.5 38.5 38.5-17.237 38.5-38.5-17.237-38.5-38.5-38.5ZM179 203.5c0-24.577 19.923-44.5 44.5-44.5s44.5 19.923 44.5 44.5-19.923 44.5-44.5 44.5-44.5-19.923-44.5-44.5Z"
                fill="#222"
            />
            <Path
                d="M233.431 202.46a9.913 9.913 0 0 0-.725-3.245 9.97 9.97 0 0 0-2.453-3.527 9.849 9.849 0 0 0-2.256-1.572 9.888 9.888 0 0 0-4.014-1.063h-.946a9.901 9.901 0 0 0-3.52.82 9.916 9.916 0 0 0-3.459 2.535 9.945 9.945 0 0 0-1.899 3.212 9.843 9.843 0 0 0-.551 2.852c0 .168-.012.335-.012.507 0 .173 0 .294.012.439a9.82 9.82 0 0 0 .992 3.901 9.982 9.982 0 0 0 5.463 4.961 9.847 9.847 0 0 0 3.005.611c.153 0 .306.012.461.012.156 0 .323 0 .485-.012a9.926 9.926 0 0 0 3.629-.883 9.955 9.955 0 0 0 3.127-2.254 9.938 9.938 0 0 0 1.557-2.183c.146-.279.279-.565.398-.859a9.823 9.823 0 0 0 .728-3.303v-.439c0-.148-.015-.342-.022-.51Zm-3.328 3.112a7.085 7.085 0 0 1-2.045 2.831 7.03 7.03 0 0 1-2.35 1.31 7.021 7.021 0 0 1-1.715.335c-.16 0-.323.017-.486.017-.162 0-.308 0-.46-.017a7.056 7.056 0 0 1-4.813-2.336 7.058 7.058 0 0 1-1.807-4.296c0-.146-.015-.291-.015-.439 0-.148 0-.34.02-.507a7.016 7.016 0 0 1 .686-2.574 7.105 7.105 0 0 1 .951-1.455 7.001 7.001 0 0 1 2.482-1.897 7.015 7.015 0 0 1 2.498-.636c.153 0 .306-.014.461-.014.155 0 .325 0 .485.017.685.044 1.359.19 2.001.432a7.114 7.114 0 0 1 4.369 4.815c.116.431.19.872.221 1.317 0 .167.019.334.019.507 0 .172 0 .293-.014.439a7.007 7.007 0 0 1-.488 2.151Z"
                fill="#222"
            />
            <Path
                d="m185.677 186.753-.295.697 75.835 32.143.295-.697-75.835-32.143Z"
                fill="#222"
            />
            <Path
                d="m239.154 165.084-32.13 75.841.697.295 32.13-75.84-.697-.296Z"
                fill="#222"
            />
            <Path
                d="m261.585 187.63-76.555 30.388.279.703 76.555-30.387-.279-.704Z"
                fill="#222"
            />
            <Path
                d="m208.596 164.775-.703.279 30.387 76.555.704-.279-30.388-76.555Z"
                fill="#222"
            />
            <Path
                d="M228.247 201.752a4.94 4.94 0 0 0-4.769-3.685 4.93 4.93 0 0 0-.173 9.86 4.938 4.938 0 0 0 2.901-.819 4.93 4.93 0 0 0 2.041-5.366v.01Zm-4.764 4.669a3.414 3.414 0 0 1-.14-6.826h.135a3.426 3.426 0 0 1 3.406 3.738 3.397 3.397 0 0 1-1.835 2.709c-.484.25-1.021.38-1.566.379Z"
                fill="#222"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.5 165C53.237 165 36 182.237 36 203.5S53.237 242 74.5 242s38.5-17.237 38.5-38.5S95.763 165 74.5 165ZM30 203.5c0-24.577 19.923-44.5 44.5-44.5 24.576 0 44.5 19.923 44.5 44.5S99.076 248 74.5 248C49.923 248 30 228.077 30 203.5Z"
                fill="#222"
            />
            <Path
                d="M83.845 202.407a9.931 9.931 0 0 0-.408-2.355 9.908 9.908 0 0 0-2.105-3.743 8.315 8.315 0 0 0-.662-.675A9.92 9.92 0 0 0 74.397 193h-.946a9.882 9.882 0 0 0-6.984 3.36 9.97 9.97 0 0 0-1.9 3.211 9.953 9.953 0 0 0-.567 2.846v.946a9.908 9.908 0 0 0 .64 3.032c.112.298.243.587.374.871a10.057 10.057 0 0 0 2.326 3.063 9.777 9.777 0 0 0 3.139 1.895 9.756 9.756 0 0 0 3.006.614c.152 0 .308.012.463 0 .155-.013.323 0 .485 0a9.934 9.934 0 0 0 2.736-.52 9.806 9.806 0 0 0 3.326-1.945c.242-.209.463-.429.68-.66a9.926 9.926 0 0 0 2.682-6.345v-.44c0-.147-.002-.354-.012-.521Zm-3.319 3.119a7.02 7.02 0 0 1-2.044 2.839 7.062 7.062 0 0 1-2.349 1.309 6.917 6.917 0 0 1-2.2.35c-.162 0-.308 0-.46-.015a6.953 6.953 0 0 1-1.866-.376 6.907 6.907 0 0 1-.87-.369 7.168 7.168 0 0 1-2.08-1.591 7.193 7.193 0 0 1-1.385-2.297 7.016 7.016 0 0 1-.42-1.999c0-.145-.014-.291-.014-.439 0-.148 0-.339.017-.507a7.045 7.045 0 0 1 1.637-4.039 7.163 7.163 0 0 1 2.482-1.899 7.065 7.065 0 0 1 2.489-.631c.153 0 .308-.014.463-.014.155 0 .325 0 .485.017.686.044 1.36.19 2.004.432a7.17 7.17 0 0 1 2.25 1.36 7.115 7.115 0 0 1 1.812 2.552 7.05 7.05 0 0 1 .547 2.722c0 .172 0 .293-.015.439a6.967 6.967 0 0 1-.483 2.156Z"
                fill="#222"
            />
            <Path
                d="M78.7 201.685A4.942 4.942 0 0 0 73.931 198a4.926 4.926 0 0 0-4.668 3.342 4.93 4.93 0 1 0 9.437.333v.01Zm-4.764 4.669a3.413 3.413 0 0 1-3.377-3.345 3.416 3.416 0 0 1 3.236-3.481h.136a3.416 3.416 0 0 1 3.108 1.997 3.392 3.392 0 0 1-.318 3.396 3.418 3.418 0 0 1-2.785 1.433Z"
                fill="#222"
            />
            <Path
                d="m36.364 186.835-.296.697 75.835 32.143.295-.697-75.834-32.143Z"
                fill="#222"
            />
            <Path
                d="M89.696 165.234 57.573 241.01l.697.295 32.122-75.776-.696-.295Z"
                fill="#222"
            />
            <Path
                d="m112.269 187.711-76.555 30.388.279.703 76.555-30.387-.279-.704Z"
                fill="#222"
            />
            <Path
                d="m59.28 164.848-.704.279 30.388 76.555.704-.279-30.388-76.555Z"
                fill="#222"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M257.288 168.597a47.596 47.596 0 0 0-55.431-8.631 203.08 203.08 0 0 0-.953-3.153l-12.614-40.51a1.697 1.697 0 0 0-3.003-.189 1.7 1.7 0 0 0-.218 1.186l7.762 24.895-56.956 49.305-25.361-45.858-1.872-3.4-5.012-9.061c-.4-.727-1.417-1.04-2.268-.703-.851.337-1.225 1.213-.827 1.941l4.609 8.448a1.705 1.705 0 0 0-.32.609l-8.818 16.177a47.555 47.555 0 0 0-46.55 1.635A47.56 47.56 0 0 0 26.63 201.89c.017-1.089.515-12.897 14.2-29.836 2.276-2.819 5.16-5.094 8.16-7.151a44.88 44.88 0 0 1 45.706-2.846l-19.799 36.282a4.928 4.928 0 0 1 3.008 1.598l19.753-36.225a44.833 44.833 0 0 1 16.354 17.613l2.44-1.266A47.769 47.769 0 0 0 99.23 161.48l-.277-.167 8.114-14.887 33.063 60.692-60.844-5.155-.294-.024v.029a4.939 4.939 0 0 1-.276 3.289l.21.017 63.377 5.252c.262.167.557.274.864.315.194.082.401.125.611.126a1.373 1.373 0 0 0 .992-.4 1.308 1.308 0 0 0 .825-.868l51.382-54.157.708 2.27c.398 1.276.785 2.56 1.16 3.852l-.265.163a47.744 47.744 0 0 0-17.193 18.608l2.44 1.261a44.88 44.88 0 0 1 15.801-17.298c.35 1.23.694 2.455 1.031 3.663l.123.438c.612 2.177 1.24 4.416 1.891 6.618.417 1.422.844 2.7 1.297 3.903 1.917 5.065 5.053 10.341 9.32 15.683a96.601 96.601 0 0 0 8.036 8.8l.182.18c.197.194.372.368.439.439a1.702 1.702 0 0 0 1.32.631 1.686 1.686 0 0 0 1.674-1.813 1.69 1.69 0 0 0-.316-.856 9.104 9.104 0 0 0-.934-.97c-8.184-8.024-13.756-15.855-16.565-23.287a49.025 49.025 0 0 1-1.213-3.663c-.686-2.331-1.353-4.711-1.999-7.015a773.216 773.216 0 0 0-1.271-4.507 44.876 44.876 0 0 1 46.203 2.537c3.003 2.045 5.887 4.325 8.168 7.142 13.705 16.929 14.217 28.735 14.234 29.836a47.404 47.404 0 0 0-13.953-33.548l-.007-.012Zm-63.406-23.001 1.877 6.028-51.59 54.873-6.523-11.794 56.236-49.107Z"
                fill="#4DAB89"
            />
            <Path
                d="M26.613 201.963v-.083a.766.766 0 0 0 0 .083Z"
                fill="#F15158"
            />
            <Path
                d="M191.206 109.089c-1.082-2.326-4.764-3.243-7.068-3.034-2.346.213-5.075 1.761-1.623 3.41 1.201.573 4.648-.66 5.579 1.06.454.835-1.315 3.117-1.671 3.578-1.424 1.844-4.022 4.456-5.955 5.373-2.506 1.184-11.595-.262-12.26 2.195-1.14 4.219 10.348 1.873 12.231 1.305 4.257-1.278 13.166-8.727 10.767-13.887Zm-3.82.922h.022-.022Zm.817.766a.06.06 0 0 0 0-.019c.008.017.005.022 0 .019Z"
                fill="#4DAB89"
            />
            <Path
                d="M180.473 119.476h.029c.116-.046.201-.133-.029 0Z"
                fill="#8DBF73"
            />
            <Path
                d="M167.614 123.386c.007.23.093.451.242.626.17.139.373.231.59.267 2.564.648 5.31.216 7.925-.259 1.211-.222 2.419-.45 3.624-.685a.962.962 0 0 0 .499-.201.642.642 0 0 0 .153-.412 5.033 5.033 0 0 0-.553-2.838.663.663 0 0 0-.242-.294.877.877 0 0 0-.415-.085c-2.707-.121-5.41.257-8.085.633-.844.119-2.234.114-2.972.529-1.006.56-.861 1.856-.766 2.719ZM179.505 109.506c1.407.33 3.032.333 4.402.485 1.271.141 2.453.044 3.712.134.31.024.584-2.642.604-2.911.056-.757-.17-.771-.939-.859-1.436-.165-2.891-.213-4.31-.485a7.7 7.7 0 0 0-4.165.277 1.169 1.169 0 0 0-.578.356 1.018 1.018 0 0 0-.148.512 10.89 10.89 0 0 0-.046 1.511.75.75 0 0 0 .09.391.83.83 0 0 0 .403.281c.316.127.642.23.975.308ZM93.185 134.552c2.367 1.902 6.064 1.601 8.415-.315.691-.563 1.285-1.242 2.008-1.761 1.956-1.405 4.529-1.456 6.928-1.623a53.661 53.661 0 0 0 6.55-.852c.57-.111 1.181-.242 1.567-.689.65-.727.291-1.979-.485-2.588-.777-.609-1.803-.749-2.778-.863-5.526-.648-11.551-1.769-17.111-1.06-4.623.591-10.627 5.312-5.094 9.751Z"
                fill="#2D2B3F"
            />
            <Path
                d="M156.907 210.334c0-.095.014-.192.021-.286.049-.049.105-.097.146-.136.208-.189.446-.403.446-.696 0-.294-.242-.507-.446-.694a3.647 3.647 0 0 1-.151-.141l-.021-.274c.043-.058.092-.119.131-.165.179-.216.38-.461.337-.747-.044-.286-.311-.466-.546-.621-.051-.034-.119-.077-.177-.121a4.745 4.745 0 0 0-.058-.257c.034-.066.077-.136.109-.189.143-.243.308-.512.221-.789-.088-.276-.376-.415-.631-.531l-.199-.097-.095-.243c.025-.072.059-.15.083-.211.104-.259.225-.553.099-.815-.126-.262-.431-.349-.703-.429a2.53 2.53 0 0 1-.218-.068c-.039-.07-.08-.138-.122-.209 0-.075.034-.162.049-.225.068-.274.143-.582-.022-.822-.165-.241-.485-.282-.759-.321-.066 0-.156-.019-.243-.036l-.145-.182c0-.078 0-.17.017-.243.024-.281.053-.596-.146-.81-.199-.213-.517-.208-.796-.204h-.242l-.087-.08-.081-.072c0-.078-.017-.173-.019-.243-.017-.279-.036-.597-.264-.779-.228-.182-.541-.128-.818-.082-.065 0-.157.027-.242.034l-.19-.129a3.009 3.009 0 0 1-.055-.242c-.059-.277-.124-.587-.376-.728-.253-.141-.556-.048-.82.039a2.656 2.656 0 0 1-.231.068l-.208-.1c-.032-.072-.063-.157-.088-.218-.097-.264-.211-.563-.485-.669-.274-.107-.553.036-.803.162-.06.029-.14.07-.211.099l-.242-.07a3.498 3.498 0 0 1-.117-.199c-.136-.242-.291-.524-.577-.589-.286-.066-.541.119-.769.281-.053.037-.126.088-.192.129a4.043 4.043 0 0 0-.242-.037 4.565 4.565 0 0 1-.143-.174c-.173-.223-.367-.485-.66-.498-.294-.012-.517.197-.728.391a3.841 3.841 0 0 1-.167.155h-.211a2.364 2.364 0 0 1-.168-.153c-.201-.191-.431-.412-.727-.39-.296.022-.486.274-.66.497-.039.049-.088.114-.136.17l-.257.039a3.941 3.941 0 0 1-.185-.124c-.228-.162-.485-.344-.768-.281-.284.063-.442.344-.578.592-.029.05-.068.123-.107.184l-.242.077a3.318 3.318 0 0 1-.194-.092c-.243-.126-.536-.269-.805-.162-.27.107-.384.405-.486.669a2.368 2.368 0 0 1-.075.194l-.242.119a3.104 3.104 0 0 1-.202-.06c-.267-.088-.567-.185-.82-.039-.252.145-.317.456-.376.727-.012.056-.026.131-.046.199l-.23.158c-.071 0-.146-.019-.204-.029-.276-.046-.589-.097-.817.085-.228.182-.243.485-.262.779 0 .058 0 .13-.015.198l-.182.168-.031.029h-.199c-.282 0-.599 0-.796.204-.196.203-.17.531-.143.81 0 .056 0 .126.014.191a3.796 3.796 0 0 0-.186.243l-.192.029c-.279.037-.594.08-.759.32-.165.241-.088.549-.02.823l.042.177a7.773 7.773 0 0 0-.16.274l-.173.053c-.269.078-.577.168-.703.43s0 .555.102.815c.019.043.043.102.063.16-.041.102-.083.206-.121.31l-.156.078c-.254.119-.546.242-.63.531-.085.289.077.551.223.791.024.039.053.09.08.138-.027.114-.054.228-.078.342l-.128.087c-.243.156-.503.333-.546.621-.044.289.16.532.337.745l.097.121c0 .119-.019.243-.027.362l-.109.099c-.208.19-.446.403-.446.694 0 .291.242.507.446.696.032.027.071.061.107.097 0 .124.014.243.027.369l-.093.114c-.179.216-.38.461-.337.747.044.286.311.466.546.619l.114.077c.027.124.053.243.085.371l-.073.122c-.143.242-.308.512-.221.788.088.277.376.412.631.531l.124.059c.044.118.092.242.138.356-.017.046-.034.09-.051.126-.104.26-.225.556-.099.815.126.26.432.352.703.43l.126.039c.063.111.129.223.194.334 0 .046-.019.092-.029.131-.068.272-.143.582.022.823.165.24.485.281.759.317l.131.02c.078.102.16.204.243.303 0 .048 0 .095-.012.133-.024.279-.054.597.145.811.199.213.517.206.796.201h.133l.287.264v.131c.017.282.036.599.264.781.228.182.541.129.817.083l.129-.022c.107.078.216.15.325.223l.027.126c.058.274.124.587.376.728.252.141.555.046.82-.041l.123-.039.134.068.223.107c.017.041.034.082.046.116.097.264.211.563.485.67.274.106.553-.037.803-.163l.114-.056c.126.042.243.08.381.117.024.039.044.077.063.109.136.242.291.524.577.589.287.066.541-.119.769-.281l.105-.073c.131.022.264.041.395.058l.078.097c.172.224.366.486.659.498.294.012.517-.199.728-.393l.095-.09h.398l.097.09c.169.211.411.352.679.393h.039c.293-.02.485-.274.659-.498.025-.029.051-.065.083-.101l.381-.059.114.078c.228.16.485.344.769.279.284-.066.441-.342.577-.59l.068-.121.359-.111.129.063c.242.126.536.266.805.162.269-.104.383-.407.485-.669.015-.042.032-.093.053-.141l.325-.158.146.046c.267.085.568.185.82.039.252-.145.318-.458.376-.728 0-.046.019-.101.034-.155l.286-.199.16.027c.277.044.592.097.818-.085.225-.182.242-.5.262-.779v-.169l.242-.228h.17c.281 0 .599 0 .796-.204.196-.204.169-.529.143-.81 0-.049 0-.114-.012-.175l.199-.243c.063-.012.126-.021.177-.026.279-.039.594-.08.759-.32.165-.241.087-.551.019-.823 0-.051-.029-.116-.041-.182.053-.087.107-.177.155-.269l.177-.053c.27-.078.578-.168.704-.43s0-.555-.102-.815a2.257 2.257 0 0 1-.07-.177c.038-.094.075-.189.111-.284l.17-.082c.243-.117.546-.243.631-.531.085-.289-.078-.549-.224-.789a5.319 5.319 0 0 1-.097-.169l.066-.289c.053-.041.112-.08.158-.109.242-.156.502-.333.545-.621.044-.289-.16-.531-.337-.747l-.123-.163Zm-19.241-7.937a9.245 9.245 0 0 1 2.396-1.591 9.254 9.254 0 0 1 3.867-.847c.204 0 .427 0 .635.022a9.186 9.186 0 0 1 3.755 1.08 9.334 9.334 0 0 1 4.6 5.799 9.25 9.25 0 0 1 .313 2.39c0 .223 0 .385-.017.577a9.309 9.309 0 0 1-.629 2.836 9.39 9.39 0 0 1-4.611 4.965 9.233 9.233 0 0 1-4.034.924c-.204 0-.405 0-.606-.019a9.2 9.2 0 0 1-2.446-.485 9.183 9.183 0 0 1-2.964-1.713 9.306 9.306 0 0 1-.888-.866 9.248 9.248 0 0 1-1.312-1.875 8.789 8.789 0 0 1-.517-1.14 9.14 9.14 0 0 1-.55-2.62c0-.189-.02-.383-.02-.577 0-.194 0-.444.025-.662a9.287 9.287 0 0 1 .9-3.396 9.378 9.378 0 0 1 2.103-2.816v.014Zm19.141 4.881v-.017.017Zm-.432-1.892a.048.048 0 0 1 0 .017v-.032.015Zm-.71-1.81v.029l-.022-.044.022.015Zm-.971-1.681a.109.109 0 0 1 0 .036l-.034-.051.034.015Zm-1.213-1.475-.048-.053.039.012a.153.153 0 0 1 .014.041h-.005Zm-1.433-1.363a.198.198 0 0 1 .014.041l-.058-.046.044.005Zm-1.606-1.094a.187.187 0 0 1 .022.039l-.063-.037a.141.141 0 0 1 .046-.002h-.005Zm-1.749-.844c.008.009.016.02.022.031l-.037-.017h-.021l.036-.014Zm-1.858-.57a.1.1 0 0 1 .024.022h-.053l.029-.022Zm-1.921-.287.022.015h-.044l.022-.015Zm-1.941 0h.017-.034.017Zm-1.921.289h.015-.027.012Zm-1.856.575h-.017.017Z"
                fill="#222"
            />
            <Path
                d="M145.28 199.947h-2.649v19.724h2.649v-19.724Z"
                fill="#222"
            />
            <Path
                d="M154.199 207.899h-20.157v2.649h20.157v-2.649Z"
                fill="#222"
            />
            <Path
                d="M147.232 210.126a3.396 3.396 0 1 0-6.55-1.796 3.396 3.396 0 0 0 6.55 1.796Z"
                fill="#222"
            />
            <Path
                d="M143.956 213.262a4.043 4.043 0 0 1-2.86-6.893 4.04 4.04 0 0 1 4.4-.878 4.032 4.032 0 0 1 2.496 3.73 4.036 4.036 0 0 1-1.181 2.856 4.043 4.043 0 0 1-2.855 1.185Zm0-6.792c-.546 0-1.078.162-1.532.464a2.762 2.762 0 0 0-1.171 2.83 2.754 2.754 0 0 0 4.995.991 2.758 2.758 0 0 0-.346-3.479 2.76 2.76 0 0 0-1.949-.806h.003Z"
                fill="#222"
            />
            <Path
                d="M144.31 222.885a4.861 4.861 0 0 1-.512-.024c-8.153-.864-69.553-14.688-70.104-14.822-.046 0-5.15-1.191-4.798-5.169.148-1.661.99-2.935 2.504-3.789a7.095 7.095 0 0 1 2.268-.798h.026l1.538-.09c29.643-1.749 51.561-2.719 61.706-2.719h.463a45.773 45.773 0 0 1 7.726.395c4.209.621 7.316 1.907 9.235 3.826 1.276 1.273 2.268 3.083 2.867 5.232.579 2.067.723 4.231.422 6.356-.749 4.912-3.845 7.762-6.307 9.302-2.523 1.545-5.312 2.3-7.034 2.3Zm-70.59-24.037a6.522 6.522 0 0 0-2.056.728c-1.341.757-2.086 1.885-2.217 3.348-.308 3.468 4.315 4.555 4.366 4.565.563.133 62.135 13.972 70.045 14.797 1.504.16 4.532-.561 7.183-2.208 2.365-1.472 5.337-4.211 6.05-8.907.611-4.01-.704-8.679-3.129-11.103-1.832-1.829-4.833-3.061-8.917-3.665a45.507 45.507 0 0 0-7.632-.388h-.485c-10.135 0-32.041.97-61.684 2.724l-1.523.109Z"
                fill="#3D393B"
            />
            <Path
                d="M144.297 223.258a5.1 5.1 0 0 1-.538-.026 40.376 40.376 0 0 1-.793-.1l.184-1.312c.289.041.541.073.747.095.157.015.314.022.471.019l.017 1.324h-.088Zm1.509-.143-.223-1.305c.393-.068.808-.16 1.228-.276l.354 1.276c-.464.128-.922.23-1.359.317v-.012Zm-4.174-.191c-.396-.066-.84-.141-1.318-.226l.231-1.305c.485.085.914.16 1.305.226l-.218 1.305Zm-2.63-.466-1.31-.243.243-1.3 1.302.243-.235 1.3Zm9.477-.073-.46-1.242c.395-.148.788-.313 1.171-.485l.561 1.213c-.425.177-.845.354-1.272.514Zm-12.094-.424c-.422-.08-.857-.168-1.303-.255l.255-1.3c.446.09.88.175 1.302.254l-.254 1.301Zm-2.608-.515-1.303-.259.262-1.3 1.301.262-.26 1.297Zm17.198-.225-.654-1.15c.371-.211.727-.437 1.077-.674l.749 1.094c-.376.257-.769.502-1.172.73Zm-19.801-.299-1.302-.266.267-1.298 1.3.267-.265 1.297Zm-2.603-.533-1.297-.27.267-1.295 1.3.267-.27 1.298Zm-2.597-.539-1.301-.271.272-1.298 1.298.271-.269 1.298Zm27.277-.191-.842-1.022c.325-.271.64-.555.932-.849l.936.937c-.32.322-.667.635-1.026.934Zm-29.88-.355-1.298-.274.274-1.295 1.298.274-.274 1.295Zm-2.591-.543-1.29-.279.274-1.295 1.297.274-.281 1.3Zm-2.595-.551-1.298-.279.276-1.292 1.298.276-.276 1.295Zm37.026-.511-1.034-.842c.266-.323.514-.661.743-1.012l1.108.728c-.252.388-.524.762-.817 1.121v.005Zm-39.622-.044-1.295-.279.279-1.295 1.295.279-.279 1.295Zm-2.593-.558-1.295-.277.279-1.295 1.295.279-.279 1.293Zm-2.593-.56-1.296-.279.282-1.296 1.295.282-.281 1.293Zm-2.596-.563-1.298-.281.282-1.293 1.298.281-.282 1.293Zm-2.593-.563-1.29-.289.281-1.295 1.293.282-.284 1.302Zm51.52-.046-1.179-.602c.19-.371.359-.752.507-1.142l1.24.471c-.166.434-.355.859-.568 1.273Zm-54.094-.524-1.295-.284.282-1.293 1.295.284-.282 1.293Zm-2.59-.568-1.298-.283.286-1.293 1.293.284-.281 1.292Zm-2.593-.567-1.308-.282.287-1.292 1.295.286-.274 1.288Zm-2.591-.57-1.295-.286.286-1.293 1.295.283-.286 1.296Zm62.872-.369-1.28-.34c.107-.405.193-.815.259-1.229l1.308.208c-.077.459-.176.913-.299 1.361h.012Zm-65.463-.204-1.295-.286.286-1.293 1.296.286-.287 1.293Zm-2.59-.572-1.296-.286.287-1.296 1.295.289-.286 1.293Zm-2.591-.575-1.295-.289.288-1.293 1.293.289-.286 1.293Zm-2.59-.575-1.296-.289.286-1.293 1.298.289-.289 1.293Zm-2.613-.57-1.298-.289.289-1.293 1.295.289-.286 1.293Zm76.262-.243-1.322-.077c.015-.269.022-.546.022-.823v-.441l1.324-.044v.485c.01.299.003.602-.014.9h-.01Zm-78.855-.342-1.288-.291.288-1.293 1.298.289-.298 1.295Zm-2.596-.579-1.29-.291.288-1.291 1.3.291-.298 1.291Zm-2.605-.587-.51-.114a8.386 8.386 0 0 1-.863-.265l.451-1.247c.233.088.47.162.71.224l.486.111-.274 1.291Zm-2.668-.971a7.588 7.588 0 0 1-1.213-.812l.851-1.017c.31.256.645.481 1 .67l-.638 1.159Zm85.329-.135a15.54 15.54 0 0 0-.203-1.255l1.297-.264c.093.449.168.907.221 1.363l-1.315.156Zm-87.551-1.796a4.204 4.204 0 0 1-.616-1.428l1.29-.289c.08.352.225.686.427.985l-1.101.732Zm87.047-.684c-.121-.41-.26-.81-.413-1.195l1.23-.486c.168.422.321.862.452 1.308l-1.269.373Zm-86.41-2.125-1.316-.155c.058-.501.188-.991.385-1.455l1.213.524a3.849 3.849 0 0 0-.281 1.091v-.005Zm85.474-.211a11.318 11.318 0 0 0-.641-1.069l1.092-.747c.267.389.51.794.727 1.212l-1.178.604Zm-84.586-1.809-.99-.878c.336-.375.721-.701 1.146-.971l.715 1.114a4.266 4.266 0 0 0-.87.735Zm83.188-.218a7.555 7.555 0 0 0-.895-.83l.827-1.036a9.314 9.314 0 0 1 1.043.97l-.975.896Zm-81.261-1.044-.471-1.239a7.215 7.215 0 0 1 1.414-.383l.192 1.31c-.389.065-.77.17-1.138.312h.002Zm1.981-.359-.077-1.322 1.329-.077.078 1.322-1.33.077Zm77.354-.135a12.63 12.63 0 0 0-1.106-.595l.568-1.196c.42.199.83.419 1.227.66l-.689 1.131Zm-74.712-.022-.078-1.322 1.327-.078.078 1.322-1.327.078Zm2.668-.141-.075-1.322 1.325-.078.077 1.322-1.327.078Zm2.651-.153-.075-1.322 1.325-.077.075 1.324-1.325.075Zm2.65-.15-.076-1.322 1.325-.075.075 1.322-1.325.075Zm2.648-.151-.075-1.322 1.325-.072.072 1.322-1.322.072Zm2.647-.145-.073-1.322 1.325-.073.072 1.322-1.324.073Zm2.649-.143-.073-1.322 1.324-.073.073 1.324-1.324.071Zm56.536-.17a19.578 19.578 0 0 0-1.213-.405l.379-1.269c.448.134.885.279 1.3.434l-.466 1.24Zm-53.89.029-.07-1.324 1.324-.068.078 1.305-1.332.087Zm2.649-.141-.07-1.322 1.324-.068.07 1.323-1.324.067Zm2.647-.135-.068-1.322 1.326-.066.066 1.322-1.324.066Zm2.648-.131-.065-1.325 1.324-.065.063 1.324-1.322.066Zm2.647-.131-.063-1.322 1.324-.063.063 1.322-1.324.063Zm2.651-.127-.06-1.322 1.326-.063.061 1.325-1.327.06Zm38.191-.097a28.91 28.91 0 0 0-1.264-.264l.243-1.303c.453.085.902.178 1.329.277l-.308 1.29Zm-35.547-.036-.058-1.324 1.322-.059.058 1.322-1.322.061Zm2.647-.119-.059-1.322 1.325-.058.058 1.324-1.324.056Zm2.646-.111-.053-1.325 1.324-.053.054 1.322-1.325.056Zm2.649-.107-.051-1.325 1.327-.053.051 1.325-1.327.053Zm25.048-.107c-.42-.058-.854-.111-1.29-.155l.133-1.317c.454.046.905.099 1.339.16l-.182 1.312Zm-22.406 0-.049-1.322 1.327-.048.046 1.324-1.324.046Zm2.649-.092-.047-1.324 1.327-.042.042 1.322-1.322.044Zm2.646-.082-.039-1.325 1.33-.039.033 1.325-1.324.039Zm2.649-.073-.032-1.325 1.327-.029.029 1.325-1.324.029Zm11.871-.022a44.054 44.054 0 0 0-1.305-.068l.051-1.324c.454.017.908.041 1.344.07l-.09 1.322Zm-9.217-.034-.025-1.325 1.33-.019.017 1.325-1.322.019Zm2.646-.034v-1.324h1.332v1.324h-1.332Zm2.668-.029-.019-1.325h1.341l-.014 1.325h-.563c-.255 0-.5 0-.754.005l.009-.005Z"
                fill="#222"
            />
            <Path
                d="M143.953 209.786a.564.564 0 0 1-.456-.905l7.471-10.084a.568.568 0 0 1 .912.677l-7.468 10.084a.574.574 0 0 1-.459.228Z"
                fill="#201C1D"
            />
            <Path
                d="M166.01 200.634h-13.95a1.744 1.744 0 0 1-1.737-1.735 1.741 1.741 0 0 1 1.735-1.737h13.95a1.74 1.74 0 0 1 1.737 1.735 1.74 1.74 0 0 1-1.735 1.737Z"
                fill="#201C1D"
            />
            <Path
                d="m174.93 197.218-22.746-.242s-.102-.444-.209-1.177a22.319 22.319 0 0 1-.242-3.357c0-2.727.664-4.267.664-4.267l7.847-.97a39.938 39.938 0 0 0 13.762 6.508 5.98 5.98 0 0 1 .909 2.249c.08.414.085.84.015 1.256Z"
                fill="#5B393B"
            />
            <Path
                d="m152.045 181.604.301 7.519s3.069.182 4.718-.211c3.001-.713 3.154-1.79 3.154-1.79l.029-5.433-8.202-.085Z"
                fill="#FFD8C7"
            />
            <Path
                d="m174.93 197.218-22.746-.242s-.102-.444-.209-1.177h.061l22.726.151a.952.952 0 0 1 .151 0c.082.418.088.848.017 1.268Z"
                fill="#201C1D"
            />
            <Path
                d="M166.566 139.212c.034-5.133-.485-7.695-.944-8.638-.652-1.305-3.507-3.377-4.383-4.01-.383-.4-8.352-5.865-10.88-7.277a68.046 68.046 0 0 0-11.432-5.138c-8.286-2.797-16.252-5.606-24.985-6.845-3.609-.512-7.333-.876-10.862.034-4.626 1.191-6.635 3.258-7.202 7.898-.512 4.187.184 8.672 2.94 12.002 3.847 4.651 10.382 5.834 16.351 6.712 6.523.967 22.389 3.718 30.143 4.887 2.224.335 3.948 2.38 3.947 4.63-.003 12.134 1.605 40.732 1.605 40.732h13.744s1.914-30.176 1.958-44.987Z"
                fill="#3D393B"
            />
            <Path
                d="m143.458 56.191-4.74 2.736-8.752-10.542 5.102-11.505 11.289.699-2.899 18.612Z"
                fill="#FFD8C7"
            />
            <Path
                d="m176.514 103.119-.558-.346-9.829-6.12c-2.739-1.699-5.39-3.397-8.005-5.25a54.602 54.602 0 0 0-2.889-1.94 30.358 30.358 0 0 0-3.122-1.723 95.89 95.89 0 0 1-1.628-4.5c-3.168-9.416-5.225-19.803-11.296-27.895-.762-1.017-1.64-2.02-2.824-2.472-1.894-.728-4.124.242-5.368 1.836-1.245 1.594-1.659 3.695-1.744 5.718-.296 7.063 2.962 13.749 6.384 19.937a255.336 255.336 0 0 0 4.83 8.359c1.172 1.94 2.29 4.529 4.019 6.064.312.28.66.518 1.034.708.148.143.301.284.453.422 3.583 3.212 16.085 10.157 18.256 11.079 2.351.994 4.767 1.834 7.195 2.612.818.262 1.637.518 2.455.767l.747.23 1.194.362c.241-.501.442-1.02.601-1.553.497-1.635.694-3.376 1.155-5.019.048-.172.099-.342.155-.511l-1.215-.765Z"
                fill="#00824B"
            />
            <Path
                d="M193.329 111.66a.846.846 0 0 1-.903.46.852.852 0 0 1-.334-.132.869.869 0 0 1-1.24 1.14c.268.385.391.853.347 1.32a.453.453 0 0 1-.138.329c-.682.544-1.698-.317-2.089-.802-.514-.646-.97-1.786-1.671-2.242a3.265 3.265 0 0 0-1.303-.395l-3.182-.485c.728.579 1.293 1.455 1.841 2.217.262.359.519.875.218 1.213-.3.337-.771.143-1.14-.037-1.387-.672-2.78-1.455-3.82-2.605-.505-.556-1.213-1.293-1.868-1.671-.485-.289-1.075-.393-1.637-.553.497-1.635.693-3.377 1.154-5.019.25.025.497.064.742.116 1.973.427 3.991.301 5.982.027.832-.117 1.659-.257 2.477-.393a2.337 2.337 0 0 1 1.109 0c.334.137.632.349.873.618 1.213 1.167 2.37 2.438 3.682 3.477.395.312.849.606 1.038 1.072.189.465-.097 1.15-.599 1.118a1.009 1.009 0 0 1 .461 1.227Z"
                fill="#FFD8C7"
            />
            <Path
                d="M139.623 87.07c-.563 1.667-3.973 16.066-5.356 22.497-.078.361-.15.701-.213 1.009-.151.728-.26 1.281-.321 1.635-10.411-.56-20.817-1.123-31.267-.461-2.503.158-4.31.432-6.307 1.941.024-1.064.076-2.126.155-3.185.02-.277.044-.551.066-.825.839-9.574 3.927-17.223 8.172-25.912 1.819-3.66 4.264-8.854 6.346-12.395 4.046-6.826 7.929-12.092 13.797-18.877.517-.597 2.113-1.897 3.45-2.95.148-.119.296-.242.436-.342.9-.703 1.594-1.23 1.594-1.23s1.746 1.368 2.768 2.264a27.142 27.142 0 0 0 9.703 5.491c.328.072.629.235.868.471.02.024.039.049.056.075.121.237.179.501.167.767.024.558.042 1.118.054 1.68l.014.87c.092 9.19-1.286 18.854-4.182 27.478Z"
                fill="#4DAB89"
            />
            <Path
                d="M153.04 46.636C151 49 152.796 49.13 152.5 49.5c-1.177 1.477-3.652 1.944-5.5 1.5-2.251-.541-2.991-3.893-4.968-4.805-1.778-.818-3.248-1.815-3.782-3.813-.429-1.601-.444-3.314-1.065-4.852-.301-.747-.888-1.523-1.698-1.509-.177.75-.351 1.502-.526 2.252-.286 1.212-.786 2.668-2.009 2.935a2.25 2.25 0 0 1-1.85-.541 6.689 6.689 0 0 1-1.264-1.538c-1.929-2.89-3.617-6.103-4.471-9.504-.766-3.057-.669-7 1.174-9.691 1.698-2.486 5.23-3.639 8.107-3.107 3.396.623 3.964 1.744 7.384 0C146.284 14.65 156.148 15.289 157 22c.482 3.84-1.84 3.827-4.681 5.953-.528.393-.686.728-.921 1.35a11.936 11.936 0 0 0-.801 3.78c-.075 1.966.388 3.911.917 5.803.769 2.763 3.566 5.387 1.526 7.75Z"
                fill="#201C1D"
            />
            <Path
                d="M137.683 32.143c-1.189-1.029-3.418-.648-4.265.693a2.82 2.82 0 0 0-.368 1.456 4.081 4.081 0 0 0 1.237 3.1c.846.764 2.156 1.036 3.175.519 2.314 3.13 5.926 4.883 9.632 5.705.393.088.866.153 1.141-.143.198-.213.196-.66.242-.943.06-.317.181-.619.357-.888a2.61 2.61 0 0 1 1.472-1.119c.108-.03.218-.05.33-.058.186-.004.372.021.551.073.384.082.746.248 1.06.485a30.595 30.595 0 0 0-.228-1.831c0 .075 2.091.29 2.285.228a.275.275 0 0 0 .17-.243.758.758 0 0 0-.059-.308 21.341 21.341 0 0 0-.744-1.926c-.471-1.055-1.026-2.072-1.58-3.09-1.052-1.94.728-4.073-.043-6.103-3.719-.77-7.277-1.56-10.824-2.887a6.288 6.288 0 0 0-1.843-.505c-.641-.034-1.332.177-1.698.701a2.618 2.618 0 0 0-.376 1.286 16.068 16.068 0 0 0 0 3.178c.043.388.099 2.377.376 2.62Z"
                fill="#FFD8C7"
            />
            <Path
                d="M137.198 35.4a1.166 1.166 0 0 0-.68-.65.724.724 0 0 0-.577.015.646.646 0 0 0-.296.626c.036.244.156.468.34.633a1.618 1.618 0 0 0 1.213.453 1.917 1.917 0 0 1-2.47-1.996c.023-.388.176-.756.434-1.046.469-.485 1.201-.633 1.575-.05.373.582.056 1.445.461 2.015Z"
                fill="#F9B8AF"
            />
            <Path
                d="m92.169 98.96-1.06-2.848c10.45-3.93 38.472-15.525 43.005-21.59 2.288-3.058 2.06-6.602 1.541-8.657-.706-2.79-2.669-5.193-3.942-5.805-8.124-3.88-18.016 2.938-18.128 3.023l-1.848-2.426c.519-.395 12.078-7.743 21.863-3.076 2.38 1.138 4.235 3.881 5.094 7.236 1.123 4.442.931 7.321-2.108 11.488-5.938 8.114-42.848 22.062-44.417 22.654Z"
                fill="#222"
            />
            <Path
                d="m118.211 58.04-1.295 2.564-1.082 2.14-20.784 41.021a4.368 4.368 0 0 1-5.688 1.957s-9.104-3.568-16.126-6.75c-7.023-3.183-11.178-5.93-11.178-5.93a4.017 4.017 0 0 1-1.94-5.486s.031-.087.094-.255c.262-.698 1.055-2.797 2.336-5.894a293.901 293.901 0 0 1 7.818-17.37c2.494-5.095 5.116-9.828 7.406-13.735a210.89 210.89 0 0 1 2.547-4.248c.386-.63.752-1.213 1.091-1.766.34-.553.704-1.116 1.01-1.593a115.888 115.888 0 0 1 1.872-2.858 2.014 2.014 0 0 1 2.63-.902L101.5 44.5l14.773 8.065a4.024 4.024 0 0 1 2.361 3.92 4.02 4.02 0 0 1-.423 1.555Z"
                fill="#FD5252"
            />
            <Path
                d="M118.187 58.134a30.294 30.294 0 0 0-.383-3.303c-.219-1.24-1.041-1.742-1.698-2.29 0 0-2.329-1.114-5.679-2.705h-.014c-8.347-3.966-23.008-10.89-23.773-10.96a3.018 3.018 0 0 0-2.06.653c-.263.322-.48.68-.644 1.063-.97 1.91-2.477 5.663-2.477 5.663l-.611-.322-2.062-1.096c-.294-.141-.485-.546-.556-.97-.07-.425 0-.796.243-1 1.492-1.337 3.054-3.438 6.75-5.189 3.414-1.615 8.311-.485 19.181 4.204 5.271 2.28 11.845 5.865 14.212 8.696 1.909 2.292.932 4.81-.429 7.556Z"
                fill="#FD5252"
            />
            <Path
                d="M116.062 52.655c-1.065-.517-28.5-13.8-29.681-13.703-.775.094-1.5.434-2.067.97l-.383.665-3.088 5.336-2.057-1.087c-.294-.14-.485-.545-.555-.97 1.212-1.213 4.087-3.905 7.621-5.24.915-.346 16.185 7.035 24.558 11.195h.015c3.119 1.565 5.348 2.688 5.637 2.834Z"
                fill="#FD5252"
            />
            <Path
                d="M60.13 87.544a4.017 4.017 0 0 0 1.94 5.487s4.155 2.748 11.178 5.928c7.022 3.18 16.114 6.763 16.114 6.763a4.366 4.366 0 0 0 5.543-1.698L60.217 87.287c-.056.17-.087.257-.087.257Z"
                fill="#222"
            />
            <Path
                d="M185.809 121.055c0 .415-.102.881-.449 1.109a.65.65 0 0 1-.771-.109 1.028 1.028 0 0 0-.095-.338.37.37 0 0 0 .095.338 1.12 1.12 0 0 1-.65 1.184 1.126 1.126 0 0 1-1.317-.297c.086.11.146.238.176.374a.917.917 0 1 1-1.799.354c.107.592-1.742-.218-1.941-.371-.878-.728-.95-2.089-1.622-3.078a1.333 1.333 0 0 0-.522-.51 1.425 1.425 0 0 0-.597-.08c-1.744 0-2.894.197-4.594-.322-.437-.134-2.486-.563-3.978-1a64.139 64.139 0 0 0 1.324-4.878l.216.032c2.409.32 4.857.171 7.209-.439 1.073-.279 2.164-.658 3.258-.498 1.021.151 1.655.864 2.576 1.213.764.282 1.655-.381 2.399-.053a1.017 1.017 0 0 1 .486 1.303c-.216.47-.745.686-1.213.921-.068.037-.141.083-.156.158a.256.256 0 0 0 .088.194c1.072 1.23 1.906 3.144 1.877 4.793Z"
                fill="#FFD8C7"
            />
            <Path
                d="m167.893 111.466-.517-.32-9.654-6.011c-2.739-1.698-5.39-3.396-8.005-5.252a55.864 55.864 0 0 0-2.889-1.94 30.416 30.416 0 0 0-3.122-1.725 94.876 94.876 0 0 1-1.628-4.5c-3.168-9.416-5.225-19.803-11.299-27.895-.759-1.014-1.637-2.021-2.821-2.472-1.895-.728-4.124.242-5.368 1.836-1.245 1.594-1.659 3.695-1.744 5.718-.296 7.063 2.961 13.751 6.384 19.937a264.459 264.459 0 0 0 4.827 8.361c1.174 1.94 2.293 4.529 4.022 6.064.314.279.661.517 1.034.709.148.143.3.281.453.419 3.583 3.214 16.085 10.159 18.256 11.079 2.351.997 4.767 1.834 7.195 2.615.728.242 1.455.458 2.183.684l.757.242 1.455.442c.122-.375.24-.751.357-1.126a64.139 64.139 0 0 0 1.324-4.878c.083-.359.158-.728.243-1.079l-1.443-.908Z"
                fill="#00824B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m86.704 50.988-7.296-3.257-.816 1.826 36 16.07.816-1.827-11.154-4.978c.58-1.769 1.073-4.168.945-6.504-.153-2.773-1.209-5.67-4.278-7.092-3.038-1.408-6.203-.466-8.756 1.047-2.25 1.335-4.192 3.204-5.46 4.715Zm1.908.852L102.417 58c.492-1.567.892-3.623.785-5.573-.131-2.385-.992-4.4-3.123-5.387-2.162-1.002-4.58-.419-6.894.953-1.81 1.073-3.426 2.558-4.573 3.846Z"
                fill="#222"
            />
            <Rect x={10} y={93} width={44} height={2} rx={1} fill="#D4DEF3" />
            <Rect x={21} y={107} width={44} height={2} rx={1} fill="#D4DEF3" />
            <Rect x={1} y={122} width={44} height={2} rx={1} fill="#D4DEF3" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path
                    fill="#fff"
                    transform="translate(26 15)"
                    d="M0 0h246v233H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default ImageThreeSvg;