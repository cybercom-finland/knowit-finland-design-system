import React, { SVGAttributes } from 'react';
import { styled } from 'styled-components';
import { ComponentBaseProps } from '../../shared';

type LogoProps = ComponentBaseProps<SVGSVGElement> &
  SVGAttributes<SVGSVGElement>;

const Logo = styled.svg`
  fill: ${(props) => props.theme.colors.grayScale.digitalBlack};
`;

export const KnowitLogo = React.forwardRef(
  (
    { viewBox = '0 0 87 28', width, height, ...props }: LogoProps,
    ref: LogoProps['ref']
  ) => {
    return (
      <Logo
        viewBox={viewBox}
        width={width as string}
        height={height as string}
        ref={ref}
        {...props}
      >
        <path d='M68.246 7.88397C69.0292 7.88397 69.6259 7.28728 69.6259 6.50413C69.6259 5.72098 69.0292 5.1243 68.246 5.1243C67.4629 5.1243 66.8662 5.72098 66.8662 6.50413C66.8662 7.24999 67.5002 7.88397 68.246 7.88397Z' />
        <path d='M17.8262 9.45027H16.0361C15.4767 9.45027 15.4021 9.52485 14.7682 10.1588L9.02507 15.9392V6.87706C9.06237 6.65331 8.8759 6.42955 8.65214 6.39226C8.61485 6.39226 8.57756 6.39226 8.54027 6.39226H5.7806C5.55684 6.35496 5.33308 6.54143 5.29579 6.76519C5.29579 6.80248 5.29579 6.83977 5.29579 6.87706V8.10773C5.2585 8.33148 5.44496 8.55524 5.66872 8.59253C5.70601 8.59253 5.7433 8.59253 5.7806 8.59253H6.7875V19.7804H5.7806C5.55684 19.7431 5.33308 19.9295 5.29579 20.1533C5.29579 20.1906 5.29579 20.2279 5.29579 20.2652V21.4958C5.2585 21.7196 5.44496 21.9434 5.66872 21.9807C5.70601 21.9807 5.7433 21.9807 5.7806 21.9807H9.95739C10.1811 22.0179 10.4049 21.8688 10.4422 21.645C10.4422 21.6077 10.4422 21.5704 10.4422 21.5331V20.2652C10.4795 20.0414 10.293 19.8177 10.0693 19.7804C10.032 19.7804 9.99469 19.7804 9.95739 19.7804H8.98778V18.8481L11.1508 16.6478L14.9546 21.2721C15.4394 21.9061 15.4394 21.9061 16.1853 21.9061H17.8262C18.0499 21.9434 18.2737 21.7569 18.2737 21.5331C18.2737 21.4958 18.2737 21.4586 18.2737 21.4213V20.2652C18.311 20.0414 18.1245 19.8177 17.9008 19.7804C17.8635 19.7804 17.8262 19.7804 17.7889 19.7804H16.4463L12.6798 15.1188L16.1107 11.6133H17.7889C18.0126 11.6505 18.1991 11.4641 18.2364 11.2403C18.2364 11.203 18.2364 11.1657 18.2364 11.1657V9.89778C18.2737 9.67403 18.1245 9.45027 17.8635 9.41298C17.9008 9.45027 17.8635 9.45027 17.8262 9.45027Z' />
        <path d='M32.5942 19.7804H31.5873V14.4475C31.5873 11.2776 29.5735 9.22652 26.4782 9.22652C25.1729 9.18923 23.905 9.63674 22.9354 10.5318V9.93508C22.9726 9.71133 22.7862 9.48757 22.5624 9.48757C22.5251 9.48757 22.4878 9.48757 22.4505 9.48757H19.7655C19.5417 9.45028 19.3179 9.59945 19.2807 9.8605C19.2807 9.89779 19.2807 9.93508 19.2807 9.97238V11.203C19.2434 11.4268 19.4298 11.6506 19.6536 11.6878C19.6909 11.6878 19.7282 11.6878 19.7655 11.6878H20.7724V19.8177H19.7655C19.5417 19.7804 19.3179 19.9668 19.2807 20.1906C19.2807 20.2279 19.2807 20.2652 19.2807 20.3025V21.5331C19.2807 21.7569 19.4298 21.9807 19.6909 21.9807C19.7282 21.9807 19.7282 21.9807 19.7655 21.9807H23.9423C24.166 22.018 24.3898 21.8315 24.4271 21.6077C24.4271 21.5704 24.4271 21.5331 24.4271 21.5331V20.2652C24.4644 20.0414 24.2779 19.8177 24.0541 19.7804C24.0168 19.7804 23.9795 19.7804 23.9423 19.7804H22.9726V14.8204C22.9726 12.7693 24.3898 11.3149 26.3663 11.3149C28.3428 11.3149 29.4243 12.5456 29.4243 14.6713V19.7804H28.4174C28.1936 19.7431 27.9699 19.9296 27.9699 20.1906C27.9699 20.2279 27.9699 20.2652 27.9699 20.3025V21.5331C27.9326 21.7569 28.1191 21.9807 28.3428 22.018C28.3801 22.018 28.4174 22.018 28.4547 22.018H32.6315C32.8552 22.0552 33.079 21.8688 33.1163 21.645C33.1163 21.6077 33.1163 21.5704 33.1163 21.5331V20.2652C33.1536 20.0414 32.9671 19.8177 32.7434 19.7804C32.6688 19.7804 32.6315 19.7804 32.5942 19.7804Z' />
        <path d='M39.4186 9.2265C35.8758 9.2265 33.0415 12.098 33.0415 15.6036C33.0415 15.6409 33.0415 15.6782 33.0415 15.7527C32.9669 19.2583 35.7639 22.1298 39.2694 22.2044C39.3067 22.2044 39.344 22.2044 39.3813 22.2044C42.9241 22.2044 45.7956 19.3329 45.7956 15.8273C45.7956 15.79 45.7956 15.7527 45.7956 15.7155C45.8702 12.2099 43.0733 9.33838 39.5677 9.26379C39.4932 9.2265 39.4559 9.2265 39.4186 9.2265ZM39.4186 20.0787C37.1064 20.0787 35.3164 18.1395 35.3164 15.6782C35.3164 13.2168 37.0691 11.3522 39.3813 11.3522C41.6934 11.3522 43.5208 13.2914 43.5208 15.7527C43.5208 18.2141 41.7307 20.0787 39.4186 20.0787Z' />
        <path d='M64.3304 9.45025H60.0417C59.818 9.41296 59.5942 9.56213 59.5569 9.82318C59.5569 9.86047 59.5569 9.89776 59.5569 9.93506V11.1657C59.5196 11.3895 59.7061 11.6132 59.9298 11.6505C59.9671 11.6505 60.0044 11.6505 60.0417 11.6505H61.0113L58.9602 18.2514L56.0514 9.82318C55.9768 9.59942 55.753 9.45025 55.5293 9.45025H54.6715C54.4478 9.45025 54.224 9.59942 54.1494 9.82318L51.2779 18.2514L49.2268 11.6132H50.1964C50.4202 11.6505 50.6439 11.4641 50.6812 11.2403C50.6812 11.203 50.6812 11.1657 50.6812 11.1284V9.89776C50.7185 9.67401 50.532 9.45025 50.3083 9.45025C50.271 9.45025 50.2337 9.45025 50.1964 9.45025H45.8704C45.6467 9.41296 45.4229 9.59942 45.3856 9.82318C45.3856 9.86047 45.3856 9.89776 45.3856 9.89776V11.1284C45.3483 11.3522 45.5348 11.5759 45.7586 11.6132C45.7959 11.6132 45.8332 11.6132 45.8332 11.6132H46.8401L50.2337 21.6077C50.3083 21.8315 50.532 21.9806 50.7558 21.9806H51.6881C51.9119 21.9806 52.1356 21.8315 52.2102 21.6077L55.0445 13.4033L57.8787 21.6077C57.9533 21.8315 58.1771 21.9806 58.4008 21.9806H59.3331C59.5569 21.9806 59.7807 21.8315 59.8552 21.6077L63.2862 11.6132H64.2931C64.5168 11.6505 64.7406 11.4641 64.7779 11.2403C64.7779 11.203 64.7779 11.1657 64.7779 11.1657V9.93506C64.8152 9.7113 64.6287 9.48754 64.405 9.48754C64.405 9.45025 64.3677 9.45025 64.3304 9.45025Z' />
        <path d='M70.4092 19.7804H69.4023V9.93508C69.4396 9.71132 69.2531 9.48756 69.0293 9.48756C68.9921 9.48756 68.9548 9.48756 68.9548 9.48756H66.1951C65.9713 9.45027 65.7476 9.63673 65.7476 9.86049C65.7476 9.89778 65.7476 9.93508 65.7476 9.97237V11.203C65.7103 11.4268 65.8968 11.6505 66.1205 11.6878C66.1578 11.6878 66.1951 11.6878 66.2324 11.6878H67.2393V19.8177H65.4119C65.1882 19.7804 64.9644 19.9668 64.9271 20.1906C64.9271 20.2279 64.9271 20.2652 64.9271 20.3025V21.5331C64.8898 21.7569 65.0763 21.9807 65.3001 22.018C65.3374 22.018 65.3746 22.018 65.4119 22.018H70.4092C70.6329 22.0552 70.8567 21.8688 70.894 21.645C70.894 21.6077 70.894 21.5704 70.894 21.5331V20.2652C70.9313 20.0414 70.7448 19.8177 70.5211 19.7804C70.4838 19.7804 70.4465 19.7804 70.4092 19.7804Z' />
        <path d='M80.1051 15.6036H78.9117C78.688 15.5663 78.4642 15.7528 78.4269 15.9765C78.4269 16.0138 78.4269 16.0511 78.4269 16.0884V18.4005C78.4642 19.2583 77.7929 20.0041 76.9352 20.0414C75.7418 20.0414 75.2197 19.5566 75.2197 18.3633V11.6505H78.1286C78.3523 11.6878 78.5761 11.5014 78.6134 11.2776C78.6134 11.2403 78.6134 11.203 78.6134 11.1657V9.93507C78.6507 9.71132 78.4642 9.48756 78.2404 9.48756C78.2031 9.48756 78.1659 9.48756 78.1659 9.48756H75.257V6.91436C75.2943 6.6906 75.1451 6.46684 74.8841 6.42955C74.8468 6.42955 74.8095 6.42955 74.7722 6.42955H73.5042C73.2805 6.39226 73.0567 6.57872 73.0194 6.80248C73.0194 6.83977 73.0194 6.87706 73.0194 6.91436V9.52485H71.6769C71.4531 9.48756 71.2294 9.67403 71.2294 9.89778C71.2294 9.93507 71.2294 9.93507 71.2294 9.97237V11.203C71.1921 11.4268 71.3786 11.6505 71.6023 11.6878C71.6396 11.6878 71.6769 11.6878 71.7142 11.6878H73.0567V18.5124C73.0567 20.75 74.5112 22.2044 76.786 22.2044C79.1355 22.2044 80.6272 20.7873 80.6272 18.6243V16.1257C80.6645 15.9019 80.478 15.6782 80.2542 15.6409C80.217 15.6036 80.1797 15.6036 80.1051 15.6036Z' />
      </Logo>
    );
  }
);
