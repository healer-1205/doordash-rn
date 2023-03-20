import * as React from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg';

const ImageSvgOne = props => (
  <Svg
    width={297}
    height={297}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={148.5} cy={148.5} r={148.5} fill="#F3F7FF" />
    <Rect
      x={96.421}
      y={22.52}
      width={78.119}
      height={149.518}
      rx={10.035}
      fill="#222"
    />
    <Rect
      x={99.781}
      y={37.64}
      width={70.559}
      height={114.238}
      rx={4.181}
      fill="#fff"
    />
    <Path
      d="M193.74 49.476c-3.655 8.758-11.226 12.682-19.2 18.403V45.462c3.582-3.154 7.482-3.403 12.087-4.783 2.058-.62 4.485-.882 6.22.355 2.55 1.816 2.08 5.612.893 8.442Z"
      fill="#F9B8AF"
    />
    <Path
      d="M149.685 172.038c-1.46 1.627-2.493-.371-3.285.42-.078.076-.341-.066-.42 0h-.42c-.41.37-1.113-.469-1.68 0-4.13 3.388-7.454 11.379-11.571 14.759-6.189 5.073-12.39 10.154-18.189 15.665a134.45 134.45 0 0 0-3.838 3.785c-7.086 7.259-15.095 13.554-22.177 20.795-2.479 2.532-4.536 5.275-6.918 7.885-1.157 1.262-6.09 8.414-7.268 8.659-13.147 2.712-25.54-40.154-28.317-48.029-2.777-7.874 18.286-28.515 20.917-47.26 1.17-8.323-.574-14.923 0-23.299.349-5.117 2.31-12.05 3.484-17.042 2.064-8.757 5.363-17.19 7.433-25.951a94.432 94.432 0 0 0 2.511-21.003c0-.767 0-1.534-.01-2.303-.07-4.013-.157-4.488-.736-8.46-.342-2.355-2.52-7.56 2.924-8.06 5.077 1.096 9.67 4.128 12.846 8.243l.046.057a21.717 21.717 0 0 1 3.927 8.196c.241 1.01.421 2.035.539 3.067.109.96.168 1.927.183 2.895v.439c0 .547 0 1.095-.03 1.631-.011.311-.027.618-.049.929-.115 1.888-.357 3.774-.654 5.642-1.19 7.651-3.314 15.42-2.12 22.999.436 2.74 1.282 5.382 2.12 8.03.33 1.047.654 2.091.955 3.145 3.009 10.654 2.865 21.825 2.239 32.783-.172 3.001-.382 5.997-.58 8.998a372.85 372.85 0 0 0-.243 3.811c-.052.832-.098 1.662-.139 2.488-.026.464-.046.931-.068 1.393-.107 2.361-.617 4.981-.325 7.292.234 1.84.98 3.478 2.849 4.626.079.051.16.099.243.144 1.9 1.069 4.119 1.371 6.285 1.608.41.046.81.09 1.207.129.331.033.654.064.979.099l.797.072.608.053c1.386.12 2.712.219 3.997.291.384.022.766.044 1.141.061.947.046 1.875.084 2.791.112l.777.022 1.322.031h.844c1.183.015 2.356.17 3.539.153h.554c1.309 0 2.647.019 4.012 0H142.142c1.133 0 2.196.42 3.418.42h.84l.907-.42h2.378Z"
      fill="#FFD8C7"
    />
    <Path
      d="M149.685 172.038c-1.46 1.627-2.282 2.339-3.074 3.13l-.277.276a4.285 4.285 0 0 1-.236.219l-.233.219-.24.219c-.411.37-.873.758-1.44 1.227-4.13 3.388-7.759 6.509-11.876 9.889-6.189 5.073-7.618 5.349-13.417 10.86-2.732-10.627-13.406-13.186-19.953-21.976-1.527-2.044-3.298-4.159-3.568-6.696-.332-3.125 2.534-9.118 3.128-12.147.81-4.199 1.527-8.416 2.051-12.663 1.005-8.264-.155-19.352-1.61-27.576-1.14-6.409-3.131-10.334-6.45-15.882-.654-1.095-1.344-2.19-1.686-3.415-.332-1.192-.319-2.451-.203-3.682.582-6.253 3.61-11.872 5.808-17.645 2.28-5.995 2.563-12.485 1.045-18.732-.437-1.752-.982-3.518-1.964-5.038-.873-1.351-2.066-2.466-3.272-3.533-2.088-1.855-4.06-3.594-6.53-4.836-1.262-.656-1.27-.976-2.64-1.357-.13-.033-.475-.125-.907-.22.44-.028.882.014 1.31.125 5.076 1.096 8.35 3.925 11.526 8.04l.046.057a21.713 21.713 0 0 1 3.927 8.196c.242 1.01.422 2.035.54 3.067.08.964.16 1.927.183 2.896v.438c0 .547 0 1.095-.031 1.631-.01.311-.026.618-.048.93-.116 1.887-.358 3.773-.654 5.642-1.19 7.65-3.315 15.42-2.121 22.998.436 2.74 1.283 5.382 2.12 8.03.33 1.047.655 2.092.956 3.145 3.009 10.654 2.865 21.825 2.239 32.783-.173 3.001-.382 5.997-.581 8.998a374.66 374.66 0 0 0-.242 3.811 194.44 194.44 0 0 0-.14 2.488c-.089.364-.163.727-.218 1.095-.362 2.191-.667 5.073-.168 7.586.378 1.905 1.22 3.598 2.85 4.626.078.051.159.099.242.144 1.9 1.069 4.119 1.371 6.285 1.608.411.046.81.09 1.207.129.332.033.654.064.979.099l.797.072.609.053c1.385.12 2.711.219 3.996.291.384.022.766.044 1.142.061.946.046 1.874.083 2.79.112l.777.022 1.322.03h.844c1.183.016 2.356.173 3.539.156h.554c1.309 0 2.647.019 4.012 0H149.685Z"
      fill="#F9B8AF"
    />
    <Path
      d="M124.963 138.18c1.689 0 2.594 1.478 2.594 3.022 0 1.545-.905 3.025-2.594 3.025-1.688 0-2.596-1.478-2.596-3.025 0-1.546.905-3.022 2.596-3.022Zm0 5.412c1.331 0 1.813-1.253 1.813-2.39 0-1.136-.482-2.387-1.813-2.387s-1.815 1.253-1.815 2.387c0 1.135.482 2.39 1.815 2.39ZM132.458 144.227a.437.437 0 0 1-.332-.168l-2.265-2.495v2.262a.363.363 0 0 1-.096.279.374.374 0 0 1-.269.118.369.369 0 0 1-.366-.397v-5.195a.355.355 0 0 1 .018-.158.355.355 0 0 1 .216-.222.35.35 0 0 1 .157-.021h1.357c.932 0 1.813.633 1.813 1.603 0 1.203-.733 1.663-1.615 1.687h-.316l1.89 2.079a.459.459 0 0 1 .141.335.309.309 0 0 1-.212.278.31.31 0 0 1-.121.015Zm-1.615-5.364h-.982v2.114h.999c.766 0 1.091-.324 1.091-1.095.007-.55-.425-1.019-1.108-1.019ZM134.321 138.631a.369.369 0 0 1 .1-.294.363.363 0 0 1 .29-.107h1.44c1.765 0 2.618 1.369 2.618 2.94 0 1.778-.94 3.007-2.528 3.007h-1.532a.355.355 0 0 1-.373-.243.354.354 0 0 1-.017-.158l.002-5.145Zm.733 4.904h1.047c1.381 0 1.898-1.161 1.898-2.372 0-1.211-.55-2.306-1.948-2.306h-.997v4.678ZM141.084 143.491h1.765a.344.344 0 1 1 0 .686h-2.105a.355.355 0 0 1-.374-.243.369.369 0 0 1-.017-.158v-5.145a.369.369 0 0 1 .101-.294.355.355 0 0 1 .29-.107h2.105a.34.34 0 0 1 .341.342.341.341 0 0 1-.341.341h-1.765v1.948h1.606a.344.344 0 0 1 .26.09.348.348 0 0 1 0 .505.339.339 0 0 1-.26.09h-1.606v1.945ZM148.206 144.227a.437.437 0 0 1-.332-.168l-2.256-2.495v2.262a.376.376 0 0 1-.096.279.368.368 0 0 1-.635-.279v-5.195a.369.369 0 0 1 .1-.294.363.363 0 0 1 .291-.107h1.357c.931 0 1.813.633 1.813 1.603 0 1.203-.733 1.663-1.615 1.687h-.316l1.889 2.079a.443.443 0 0 1 .142.335.323.323 0 0 1-.109.22.307.307 0 0 1-.109.06c-.04.013-.083.017-.124.013Zm-1.615-5.364h-.973v2.114h.999c.766 0 1.091-.324 1.091-1.095-.002-.55-.434-1.019-1.117-1.019Z"
      fill="#fff"
    />
    <Path
      d="M173.697 121.428c1.309.83 3.006 1.167 4.457 1.73 1.67.649 3.317 2.195 4.94 2.958.982.463 1.979.962 2.701 1.772.654.736 1.034 1.674 1.366 2.605.872 2.464 1.527 5.14 1.418 7.771-.061 1.597-.201 2.393-.873 3.843-.672 1.45-1.863 2.659-3.105 3.708a31.051 31.051 0 0 1-8.042 4.922c-2.498 1.047-5.236 2.111-7.047-.708-.796-1.241-.857-2.808-.829-4.284a8.857 8.857 0 0 1 .301-2.468c.873-2.782 4.763-4.6 4.663-7.651a250.767 250.767 0 0 1-.081-13.931l.131-.267Z"
      fill="#FFD8C7"
    />
    <Path
      d="M180.827 93.376c2.4 2.316 5.485 2.746 7.219 5.77.936 1.637 1.458 3.475 1.964 5.29.541 1.919 1.265 4.381.417 6.322-.755 1.726-2.359 3.563-3.491 5.095-2.702 3.634-5.891 7.717-9.475 10.477-1.746 1.334-3.733 2.602-5.913 2.479-3.399-.19-5.775-3.887-5.673-7.304.103-3.417 2.038-6.49 4.131-9.2 1.258-1.621 2.618-3.233 3.239-5.193.472-1.509.345-12.266.299-16.038 2.4.892 7.283 2.302 7.283 2.302Z"
      fill="#FFD8C7"
    />
    <Path
      d="M188.513 85.326c-.126 2.282-2.284 5.512-3.626 7.192a52.896 52.896 0 0 1-6.128 6.435c-2.029 1.814-4.421 3.577-7.143 3.546-2.88-.026-5.472-2.21-6.487-4.917-1.014-2.707-.626-5.798.539-8.442s3.037-4.91 5.029-7.009c.932-.979 1.903-1.936 2.642-3.066.05-.077.098-.154.144-.24.198-.37.356-.76.474-1.162.772-2.513.803-6.39.792-7.447v-.28a.637.637 0 0 1 .414-.042c.914.087 2.932-.11 3.465.082l.091.037c1.569.644 5.597 2.699 5.992 3.067.319.313.576.684.757 1.095a9.931 9.931 0 0 1 .418 1.036c.873 2.46 1.545 4.992 2.215 7.521.236.848.46 1.715.412 2.594Z"
      fill="#FFD8C7"
    />
    <Path
      d="M178.74 88.039c-2.52-2.94-7.56-1.26-7.56-1.26s4.305-.42 6.72 2.52c2.414 2.94 2.099 5.04 2.099 5.04s1.26-3.36-1.259-6.3ZM177.06 116.599c-2.1-1.68-5.88-.42-5.88-.42s3.696.036 5.04 1.68c1.344 1.643 2.1 4.199 2.1 4.199s.84-3.779-1.26-5.459ZM179.492 143.478c-.625-1.722-4.112-2.94-4.112-2.94s2.314 1.638 2.94 3.36c.625 1.722.42 3.78.42 3.78s1.378-2.478.752-4.2Z"
      fill="#F9B8AF"
    />
    <Path
      d="M248.236 226.899c-2.373 5.257-5.236 10.238-9.281 14.137a31.312 31.312 0 0 1-2.873 2.449c-7.169 5.401-16.287 15.943-25.066 17.483-4.4.771-8.823 1.377-13.267 1.818a.148.148 0 0 1-.042 0c-.927.09-1.859.177-2.786.247-3.636.3-7.273.487-10.909.561a147.151 147.151 0 0 1-3.395-.096c-8.692-.314-17.352-9.638-25.917-11.167-5.164-4.555-10.001-9.799-13.487-15.665-.618-1.036-1.054-2.175-1.547-3.285a28.02 28.02 0 0 0-.72-1.549c-.194-.41-.404-.821-.622-1.231-1.237-2.341-2.762-4.637-4.619-6.365-1.555-1.45-4.435-2.51-4.197-5.171.166-1.867 2.801-2.254 4.23-2.377 3.164-.272 6.905.118 9.757 1.549 8.528 4.286 13.384 10.872 23.065 13.595 4.651 1.314 9.238 3.213 13.335 5.796-.377-4.394-7.191-20.875-8.295-24.851-1.318-4.718-3.725-11.716-5.04-16.428-2.49-8.86-9.929-37.14-11.801-42.653-1.712-5.038-3.261-10.229-3.438-15.551-.074-2.223.111-4.523 1.11-6.512 1-1.989 2.95-3.603 5.167-3.68 3.336-.118 5.79 3.016 7.45 5.914 5.363 9.392 7.759 19.932 11.527 29.981a468.83 468.83 0 0 0 13.592 32.501c-.757-1.639.072-6.03.037-7.934-.059-3.029-.17-6.063.17-9.079.498-4.38 1.359-9.554 4.741-12.684 5.263-4.876 13.235-2.602 16.374 3.415 1.863 3.561 2.23 7.694 2.566 11.701.836-3.216 4.422-5.22 7.717-4.872 3.294.348 6.148 2.644 7.885 5.476 1.736 2.832 2.489 6.148 2.975 9.434 2.108-2.061 5.688-1.93 8.173-.351 2.485 1.58 4.052 4.276 5.151 7.009 2.553 6.333 2.523 21.31 2.28 28.435Z"
      fill="#FFD8C7"
    />
    <Path
      d="m136.74 227.477 1.08 1.68s2.16-1.68 2.88-2.128c.72-.448 1.08-2.912 1.08-2.912s-1.44 2.464-2.52 2.912c-1.08.448-2.52.448-2.52.448ZM159.825 142.896c2.502-.984 3.293-4.889 3.293-4.889s-1.873 3.187-3.968 3.533c-2.094.347-4.687-.271-4.687-.271s2.859 2.612 5.362 1.627Z"
      fill="#F9B8AF"
    />
    <Path
      d="M122.487 64.047h-.604a3.623 3.623 0 0 0-3.623 3.622v1.208h1.208a3.622 3.622 0 0 0 3.622-3.623v-.603a.603.603 0 0 0-.603-.604Z"
      fill="#5FAA46"
    />
    <Path
      d="M114.034 64.047h.604a3.622 3.622 0 0 1 3.622 3.622v1.208h-1.207a3.623 3.623 0 0 1-3.623-3.623v-.603c0-.334.271-.604.604-.604Z"
      fill="#5FAA46"
    />
    <Path
      d="M131.543 71.292h-26.565a1.207 1.207 0 1 1 0-2.415h26.565a1.207 1.207 0 1 1 0 2.415Z"
      fill="#9BD2F0"
    />
    <Path
      d="M118.26 71.292h-13.282a1.207 1.207 0 1 1 0-2.415h13.282a1.208 1.208 0 1 1 0 2.415Z"
      fill="#D7E6F0"
    />
    <Path
      d="M126.906 100.271h-17.291a2.416 2.416 0 0 1-2.407-2.214l-2.23-26.765h26.565l-2.231 26.765a2.414 2.414 0 0 1-2.406 2.214Z"
      fill="#9BD2F0"
    />
    <Path
      d="m130.436 84.574.402-4.83h-25.156l.403 4.83h24.351Z"
      fill="#F0915A"
    />
    <Path
      d="M107.192 97.856h11.068V76.122a2.415 2.415 0 0 0-2.415-2.415h-10.666l2.013 24.15Z"
      fill="#D7E6F0"
    />
    <Path
      d="M111.016 97.856h-1.812l-1.811-24.15h1.811l1.812 24.15Z"
      fill="#fff"
    />
    <Path d="M106.085 84.574h12.175v-4.83h-12.578l.403 4.83Z" fill="#FAB991" />
    <Path
      d="M108.208 84.574h1.811l-.362-4.83h-1.811l.362 4.83Z"
      fill="#FADCBE"
    />
    <Path
      d="M114.638 68.877h-9.66a2.415 2.415 0 0 1 2.415-2.415h4.83a2.415 2.415 0 0 1 2.415 2.415Z"
      fill="#E1322D"
    />
    <Path
      d="M108.6 66.462h-1.207a2.415 2.415 0 0 0-2.415 2.415h6.037a2.415 2.415 0 0 0-2.415-2.415Z"
      fill="#F04B37"
    />
    <Path
      d="M107.091 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604ZM108.902 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604ZM110.714 68.273a.302.302 0 1 0-.001-.603.302.302 0 0 0 .001.603Z"
      fill="#E1322D"
    />
    <Path
      d="M112.525 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604Z"
      fill="#C81E14"
    />
    <Path
      d="M131.543 68.877h-9.66a2.415 2.415 0 0 1 2.415-2.415h4.83a2.415 2.415 0 0 1 2.415 2.415Z"
      fill="#E1322D"
    />
    <Path
      d="M125.505 66.462h-1.207a2.415 2.415 0 0 0-2.415 2.415h6.037a2.415 2.415 0 0 0-2.415-2.415Z"
      fill="#F04B37"
    />
    <Path
      d="M123.996 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604ZM125.807 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604ZM127.618 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604Z"
      fill="#E1322D"
    />
    <Path
      d="M129.43 68.273a.302.302 0 1 0-.001-.603.302.302 0 0 0 .001.603Z"
      fill="#C81E14"
    />
    <Path
      d="M123.09 68.877h-9.66a2.415 2.415 0 0 1 2.415-2.415h4.83a2.415 2.415 0 0 1 2.415 2.415Z"
      fill="#E1322D"
    />
    <Path
      d="M117.053 66.462h-1.208a2.415 2.415 0 0 0-2.415 2.415h6.038a2.415 2.415 0 0 0-2.415-2.415Z"
      fill="#F04B37"
    />
    <Path
      d="M115.544 68.273a.302.302 0 1 0-.001-.603.302.302 0 0 0 .001.603ZM117.355 68.273a.302.302 0 1 0 0-.605.302.302 0 0 0 0 .605ZM119.166 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604Z"
      fill="#E1322D"
    />
    <Path
      d="M120.977 68.273a.302.302 0 1 0 0-.604.302.302 0 0 0 0 .604Z"
      fill="#C81E14"
    />
    <Path
      d="M130.234 86.991a3.604 3.604 0 0 0-2.151.784 1.227 1.227 0 0 1-1.525.006 3.603 3.603 0 0 0-2.26-.792c-.855 0-1.641.296-2.261.792a1.207 1.207 0 0 1-1.516 0 3.606 3.606 0 0 0-2.261-.792c-.855 0-1.641.296-2.26.792a1.207 1.207 0 0 1-1.516 0 3.608 3.608 0 0 0-2.261-.792c-.855 0-1.641.296-2.26.792a1.227 1.227 0 0 1-1.525-.006 3.605 3.605 0 0 0-2.152-.784l.598 7.175a3.605 3.605 0 0 0 1.562-.724 1.209 1.209 0 0 1 1.517 0 3.603 3.603 0 0 0 2.26.792c.855 0 1.641-.297 2.261-.792a1.207 1.207 0 0 1 1.516 0 3.603 3.603 0 0 0 2.26.792c.856 0 1.641-.297 2.261-.792a1.207 1.207 0 0 1 1.516 0c.62.495 1.406.792 2.261.792.855 0 1.641-.297 2.26-.792a1.209 1.209 0 0 1 1.517 0c.446.357.979.61 1.562.724l.597-7.175Z"
      fill="#643773"
    />
    <Path
      d="M105.883 82.145a3.604 3.604 0 0 0 2.563-.778 1.209 1.209 0 0 1 1.517 0 3.604 3.604 0 0 0 2.26.792c.855 0 1.641-.297 2.26-.792a1.209 1.209 0 0 1 1.517 0 3.604 3.604 0 0 0 2.26.792c.856 0 1.641-.297 2.261-.792a1.207 1.207 0 0 1 1.516 0c.62.495 1.406.792 2.261.792.855 0 1.641-.297 2.26-.792a1.209 1.209 0 0 1 1.517 0 3.604 3.604 0 0 0 2.563.778l.593-7.118a3.609 3.609 0 0 0-3.148.672 1.227 1.227 0 0 1-1.525.007 3.603 3.603 0 0 0-2.26-.792c-.855 0-1.641.297-2.261.792a1.207 1.207 0 0 1-1.516 0 3.606 3.606 0 0 0-2.261-.792c-.855 0-1.641.297-2.26.792a1.209 1.209 0 0 1-1.517 0 3.603 3.603 0 0 0-2.26-.792c-.855 0-1.641.297-2.26.792a1.227 1.227 0 0 1-1.525-.006 3.609 3.609 0 0 0-3.149-.673l.594 7.118Z"
      fill="#E1322D"
    />
    <Path
      d="M109.963 81.367a3.604 3.604 0 0 0 2.26.792c.855 0 1.641-.297 2.26-.792a1.209 1.209 0 0 1 1.517 0 3.604 3.604 0 0 0 2.26.792v-6.037a2.4 2.4 0 0 0-.316-1.194 3.601 3.601 0 0 0-1.944.778 1.209 1.209 0 0 1-1.517 0 3.603 3.603 0 0 0-2.26-.792c-.855 0-1.641.297-2.26.792a1.227 1.227 0 0 1-1.525-.006 3.609 3.609 0 0 0-3.149-.673l.594 7.118a3.604 3.604 0 0 0 2.563-.778 1.209 1.209 0 0 1 1.517 0Z"
      fill="#F04B37"
    />
    <Path
      d="m109.769 81.24-.396-5.283a1.237 1.237 0 0 1-.935-.257 3.62 3.62 0 0 0-.936-.538l.489 6.515c.16-.092.312-.196.455-.31.385-.308.902-.35 1.323-.126Z"
      fill="#F5826E"
    />
    <Path
      d="M116 87.781a1.207 1.207 0 0 1-1.516 0 3.608 3.608 0 0 0-2.261-.792c-.855 0-1.641.296-2.26.792a1.227 1.227 0 0 1-1.525-.006 3.605 3.605 0 0 0-2.152-.784l.598 7.175a3.605 3.605 0 0 0 1.562-.724 1.209 1.209 0 0 1 1.517 0 3.603 3.603 0 0 0 2.26.792c.855 0 1.641-.297 2.261-.792a1.207 1.207 0 0 1 1.516 0 3.603 3.603 0 0 0 2.26.792v-7.245c-.855 0-1.641.296-2.26.792Z"
      fill="#804B8F"
    />
    <Path
      d="M110.245 87.578a3.414 3.414 0 0 0-.282.203 1.226 1.226 0 0 1-1.514.001l.408 5.444a1.208 1.208 0 0 1 1.106.216c.23.184.484.341.756.466l-.474-6.33Z"
      fill="#9B5FAA"
    />
    <Path
      d="M111.317 90.008a.905.905 0 1 0 .001-1.811.905.905 0 0 0-.001 1.81ZM116.751 90.008a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812Z"
      fill="#9B5FAA"
    />
    <Path
      d="M111.317 77.933a.905.905 0 1 0 .001-1.811.905.905 0 0 0-.001 1.81ZM116.751 77.933a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812Z"
      fill="#F5826E"
    />
    <Path
      d="M133.223 71.387a.708.708 0 0 1-.501-1.21l2.835-2.835a.708.708 0 1 1 1.002 1.002l-2.835 2.835a.706.706 0 0 1-.501.208Z"
      fill="#E1322D"
    />
    <Path
      d="M136.058 68.562a1.417 1.417 0 1 0 0-2.834 1.417 1.417 0 0 0 0 2.834Z"
      fill="#E1322D"
    />
    <Path
      d="M147.398 62.892h-14.175a1.418 1.418 0 1 1 0-2.835h14.175a1.418 1.418 0 0 1 0 2.835Z"
      fill="#5FAA46"
    />
    <Path
      d="M145.947 71.34a5.11 5.11 0 0 1 .112-7.11l1.338-1.338h-14.174l1.338 1.338a5.11 5.11 0 0 1 .112 7.11c-2.728 2.907-8.538 10.306-8.538 20.61a14.12 14.12 0 0 0 3.622 9.463 3.534 3.534 0 0 0 2.631 1.168h15.844a3.534 3.534 0 0 0 2.631-1.168 14.12 14.12 0 0 0 3.622-9.463c0-10.304-5.81-17.703-8.538-20.61Z"
      fill="#4B8C41"
    />
    <Path
      d="M126.135 91.95v.037c.005 1.943 1.602 3.507 3.545 3.507h7.048a3.581 3.581 0 0 0 3.582-3.582V65.727c0-.783-.634-1.418-1.417-1.418h-4.257a5.106 5.106 0 0 1 .037 7.031c-2.728 2.907-8.538 10.306-8.538 20.61Z"
      fill="#5FAA46"
    />
    <Path
      d="M128.262 92.659a.709.709 0 0 1-.709-.709c0-9.885 5.702-17.028 8.154-19.64a.709.709 0 1 1 1.033.97c-2.336 2.49-7.77 9.29-7.77 18.67a.708.708 0 0 1-.708.709Z"
      fill="#91C83C"
    />
    <Path
      d="M144.563 68.562h-8.505a.709.709 0 1 1 0-1.418h8.505a.708.708 0 0 1 0 1.418Z"
      fill="#E1322D"
    />
    <Path
      d="M140.31 68.562h-4.252a.709.709 0 1 1 0-1.418h4.252a.709.709 0 1 1 0 1.418Z"
      fill="#F04B37"
    />
    <Path
      d="M150.232 102.581h8.505a4.253 4.253 0 0 0 4.253-4.252V84.154c0-.783-.635-1.417-1.418-1.417h-14.174c-.783 0-1.418.634-1.418 1.417v14.175a4.252 4.252 0 0 0 4.252 4.252Z"
      fill="#FAA019"
    />
    <Path
      d="M154.485 84.154v11.34a2.835 2.835 0 0 1-2.835 2.835h-5.67a4.252 4.252 0 0 0 4.252 4.252h8.505a4.253 4.253 0 0 0 4.253-4.252V84.154h-8.505Z"
      fill="#F06423"
    />
    <Path
      d="M148.815 84.154a.71.71 0 0 0-.709.709v13.466h1.418V84.863a.71.71 0 0 0-.709-.709Z"
      fill="#FFD205"
    />
    <Path
      d="M132.541 138.753c11.308 0 20.475-9.167 20.475-20.474 0-11.308-9.167-20.475-20.475-20.475-11.308 0-20.475 9.167-20.475 20.475 0 11.307 9.167 20.474 20.475 20.474Z"
      fill="#A5C3DC"
    />
    <Path
      d="M132.54 136.023c9.8 0 17.745-7.944 17.745-17.744 0-9.801-7.945-17.745-17.745-17.745s-17.745 7.944-17.745 17.745c0 9.8 7.945 17.744 17.745 17.744Z"
      fill="#F5871E"
    />
    <Path
      d="M114.795 118.279c0 2.419.486 4.725 1.363 6.827a17.685 17.685 0 0 0 6.827 1.362c9.8 0 17.745-7.944 17.745-17.744 0-2.42-.485-4.726-1.362-6.828a17.69 17.69 0 0 0-6.828-1.362c-9.8 0-17.745 7.944-17.745 17.745Z"
      fill="#FAA019"
    />
    <Path
      d="M115.478 118.961a.682.682 0 0 0 .682-.682c0-9.032 7.348-16.38 16.38-16.38a.683.683 0 0 0 0-1.365c-9.8 0-17.745 7.944-17.745 17.745 0 .376.306.682.683.682Z"
      fill="#FFD23C"
    />
    <Path
      d="M132.54 138.753a1.365 1.365 0 1 1 0-2.73c9.785 0 17.745-7.96 17.745-17.744a1.365 1.365 0 1 1 2.73 0c0 5.468-2.13 10.61-5.997 14.477a20.337 20.337 0 0 1-14.478 5.997Z"
      fill="#D7E6F0"
    />
    <Path
      d="M112.748 109.406a.683.683 0 0 1-.483-1.165l.116-.115a4.915 4.915 0 0 1 3.499-1.45h3.01a.683.683 0 0 1 0 1.365h-3.01a3.56 3.56 0 0 0-2.534 1.05l-.115.115a.679.679 0 0 1-.483.2ZM114.795 111.454a.68.68 0 0 1-.482-1.165l.115-.116a4.916 4.916 0 0 1 3.499-1.449h3.011a.682.682 0 1 1 0 1.365h-3.011c-.957 0-1.857.372-2.533 1.049l-.116.116a.681.681 0 0 1-.483.2ZM132.54 104.629c6.785 0 12.285 5.5 12.285 12.285s-5.5 12.284-12.285 12.284v-2.73a5.46 5.46 0 1 0 0-10.919v-10.92Z"
      fill="#E1322D"
    />
    <Path
      d="M132.54 104.629h-19.792a.682.682 0 1 0 0 1.365h.817c1.443 0 2.734.905 3.214 2.265 1.496 4.246 5.543 7.29 10.301 7.29h5.46a5.46 5.46 0 1 0 0-10.92Z"
      fill="#F04B37"
    />
    <Path
      d="M131.858 105.994h-19.11a.683.683 0 0 1 0-1.365h19.11a.682.682 0 1 1 0 1.365Z"
      fill="#F5826E"
    />
    <Path
      d="M128.445 123.738h1.365a2.73 2.73 0 0 1 2.73 2.73h-4.095a1.365 1.365 0 1 1 0-2.73ZM128.445 129.198h4.095v-2.73h-4.095a1.365 1.365 0 1 0 0 2.73Z"
      fill="#E1322D"
    />
    <Path
      d="M120.938 105.994a.682.682 0 1 0 0-1.365.682.682 0 0 0 0 1.365Z"
      fill="#463C4B"
    />
    <Path
      d="M121.62 126.468a5.46 5.46 0 1 0 0-10.919 5.46 5.46 0 1 0 0 10.919Z"
      fill="#91C83C"
    />
    <Path
      d="M126.398 120.667h-3.954l2.796-2.795a.342.342 0 0 0-.483-.483l-2.795 2.796v-3.954a.342.342 0 0 0-.683 0v3.954l-2.796-2.796a.341.341 0 1 0-.482.483l2.795 2.795h-3.953a.34.34 0 1 0 0 .683h3.953l-2.795 2.795a.342.342 0 0 0 .483.483l2.795-2.796v3.954a.341.341 0 0 0 .683 0v-3.954l2.795 2.796a.34.34 0 0 0 .483 0 .342.342 0 0 0 0-.483l-2.796-2.795h3.954a.342.342 0 0 0 0-.683Z"
      fill="#5FAA46"
    />
    <Path
      d="M121.62 116.231a4.783 4.783 0 0 1 4.778 4.777 4.783 4.783 0 0 1-4.778 4.778 4.783 4.783 0 0 1-4.777-4.778 4.782 4.782 0 0 1 4.777-4.777Zm0-.682a5.46 5.46 0 1 0 0 10.92 5.46 5.46 0 0 0 0-10.92ZM137.659 131.928h-.341a2.048 2.048 0 0 0-2.048 2.048v.341c0 .188.153.341.341.341h.342c1.13 0 2.047-.916 2.047-2.047v-.341a.342.342 0 0 0-.341-.342ZM130.151 118.279h.342c1.131 0 2.047.916 2.047 2.047v.341a.34.34 0 0 1-.341.341h-.341a2.047 2.047 0 0 1-2.048-2.047v-.341a.34.34 0 0 1 .341-.341ZM148.579 112.819h-.342c-1.13 0-2.047.916-2.047 2.047v.341c0 .189.153.342.341.342h.341a2.048 2.048 0 0 0 2.048-2.048v-.341a.34.34 0 0 0-.341-.341Z"
      fill="#4B8C41"
    />
    <Path
      d="M143.46 126.468a2.73 2.73 0 1 0 0-5.46 2.73 2.73 0 0 0 0 5.46ZM140.73 112.819a1.365 1.365 0 1 0 0-2.73 1.365 1.365 0 0 0 0 2.73ZM122.985 130.563a1.365 1.365 0 1 0 0-2.73 1.365 1.365 0 0 0 0 2.73ZM141.413 129.198a.682.682 0 1 0 0-1.363.682.682 0 0 0 0 1.363Z"
      fill="#F06423"
    />
    <Path
      d="M130.038 134.203a.682.682 0 1 0 0-1.363.682.682 0 0 0 0 1.363ZM137.09 104.174a.683.683 0 1 0 0-1.367.683.683 0 0 0 0 1.367ZM117.525 114.866a.682.682 0 1 0 .001-1.365.682.682 0 0 0-.001 1.365ZM147.555 120.781a.682.682 0 1 0 0-1.365.682.682 0 0 0 0 1.365Z"
      fill="#F04B37"
    />
    <Path
      d="M134.588 123.738a.682.682 0 1 0 0-1.363.682.682 0 0 0 0 1.363Z"
      fill="#F06423"
    />
    <Path
      d="M79.949 59.48v1.68s3.36-1.68 4.2-2.24c.84-.56 3.36-2.8 3.36-2.8s-3.78 2.24-5.04 2.8c-1.26.56-2.52.56-2.52.56Z"
      fill="#F9B8AF"
    />
  </Svg>
);

export default ImageSvgOne;
