import { rem } from 'polished';

export default baseTheme => {
    return {
        borderRadius: baseTheme.borderRadius,
        color: baseTheme.colorWhite,
        display: 'inline-block',
        fontSize: `${(parseFloat(baseTheme.fontSize) - 2) / parseFloat(baseTheme.fontSize)}rem`,
        fontWeight: baseTheme.weightSemiBold,
        lineHeight: baseTheme.rem,
        paddingTop: '0.26667em',
        paddingRight: '0.4em',
        paddingBottom: '0.26667em',
        paddingLeft: '0.4em',
        textTransform: 'uppercase',
        userSelect: 'none',
        verticalAlign: 'baseline',
        webkitTextStroke: 0,
        whiteSpace: 'nowrap',

        defaultBackgroundColor: baseTheme.colorGray,
        infoBackgroundColor: baseTheme.colorInfo,
        successBackgroundColor: baseTheme.colorSuccess,
        warningBackgroundColor: baseTheme.colorWarning,
        errorBackgroundColor: baseTheme.colorError
    };
};
