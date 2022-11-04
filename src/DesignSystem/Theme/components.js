import { experimental_sx as sx, inputLabelClasses, inputBaseClasses } from '@mui/material'
import dsSpacing, { getSpacingPX } from './spacing'

export default function getComponents (dsColor, dsTypo, calculateLinerHeight) {
  const components = {
    MuiChip: {
      defaultProps: {
        size: 'small',
        type: 'status'
      },
      variants: [
        {
          props: { type: 'status' },
          style: sx({
            backgroundColor: dsColor.supportTypical,
            color: dsColor.typoOnSurface
          })
        },
        {
          props: { type: 'status', color: 'success' },
          style: sx({
            backgroundColor: dsColor.supportPositive
          })
        },
        {
          props: { type: 'status', color: 'warning' },
          style: sx({
            backgroundColor: dsColor.supportWarning
          })
        },
        {
          props: { type: 'status', color: 'pending' },
          style: sx({
            backgroundColor: dsColor.supportPending
          })
        },
        {
          props: { type: 'status', color: 'error' },
          style: sx({
            backgroundColor: dsColor.supportNegative
          })
        },
        {
          props: { type: 'status', color: 'info' },
          style: sx({
            backgroundColor: dsColor.neutral1,
            color: dsColor.typoPrimary
          })
        },
        {
          props: { type: 'nudge' },
          style: sx({
            py: dsSpacing.deepfreeze,
            textTransform: 'none'
          })
        },
        {
          props: { type: 'nudge', color: 'default' },
          style: sx({
            backgroundColor: dsColor.supportDefaultNeutral,
            color: dsColor.supportTypical
          })
        },
        {
          props: { type: 'nudge', color: 'success' },
          style: sx({
            backgroundColor: dsColor.supportPositiveNeutral,
            color: dsColor.supportPositive
          })
        },
        {
          props: { type: 'nudge', color: 'warning' },
          style: sx({
            backgroundColor: dsColor.supportWarningNeutral,
            color: dsColor.supportWarning
          })
        },
        {
          props: { type: 'nudge', color: 'pending' },
          style: sx({
            backgroundColor: dsColor.supportPendingNeutral,
            color: dsColor.supportPending
          })
        },
        {
          props: { type: 'nudge', color: 'error' },
          style: sx({
            backgroundColor: dsColor.supportNegativeNeutral,
            color: dsColor.supportNegative
          })
        },
        {
          props: { type: 'nudge', color: 'info' },
          style: sx({
            backgroundColor: dsColor.neutral1,
            color: dsColor.typoPrimary
          })
        }
      ],
      styleOverrides: {
        root: {
          ...dsTypo.supportRegularMetadata,
          color: dsColor.typoOnSurface,
          borderRadius: '4px'
        },
        sizeSmall: sx({
          px: dsSpacing.glacial,
          py: dsSpacing.quickfreeze,
          height: '20px'
        }),
        iconSmall: sx({
          fontSize: dsTypo.fontsizeIceage,
          m: dsSpacing.zero,
          mr: dsSpacing.quickfreeze,
          color: 'inherit'
        }),
        labelSmall: sx({
          p: dsSpacing.zero
        })
      }
    },
    MuiDialog: {
      defaultProps: {
        scroll: 'paper',
        maxWidth: 'xs',
        fullWidth: true
      },
      styleOverrides: {
        paper: sx({
          bgcolor: 'dsColor.surfacePrimary',
          borderRadius: '16px',
          boxShadow: '0px 24px 40px rgba(0, 0, 0, 0.08)'
        }),
        paperWidthXs: {
          maxWidth: '288px'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: sx({
          ...dsTypo.headingBoldSmall,
          color: 'dsColor.typoPrimary',
          px: dsSpacing.bittercold,
          pb: dsSpacing.bittercold,
          pt: dsSpacing.mild,
          textAlign: 'center'
        })
      }
    },
    MuiDialogContent: {
      variants: [
        {
          props: { textOnly: true },
          style: sx({
            ...dsTypo.bodyRegularMedium,
            pb: dsSpacing.glacial,
            textAlign: 'center'
          })
        }
      ],
      styleOverrides: {
        root: sx({
          color: 'dsColor.typoTertiary',
          px: dsSpacing.bittercold,
          pb: dsSpacing.mild
        })
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: sx({
          p: dsSpacing.zero,
          '> *': {
            flex: 1
          }
        })
      }
    },
    MuiAvatar: {
      variants: [
        {
          props: { size: 'S' },
          style: {
            width: '24px',
            height: '24px'
          }
        },
        {
          props: { size: 'M' },
          style: {
            width: '32px',
            height: '32px'
          }
        },
        {
          props: { size: 'L' },
          style: {
            width: '40px',
            height: '40px'
          }
        },
        {
          props: { size: 'XL' },
          style: {
            width: '48px',
            height: '48px'
          }
        },
        {
          props: { size: 'XXL' },
          style: {
            width: '64px',
            height: '64px'
          }
        },
        {
          props: { size: '3XL' },
          style: {
            width: '80px',
            height: '80px'
          }
        }
      ],
      defaultProps: {
        size: 'L'
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: dsColor.iconDefault,
          '& .MuiSvgIcon-root': {
            cursor: 'pointer'
          }
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small'
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        color: 'primary'
      },
      styleOverrides: {
        root: {
          ...dsTypo.bodyRegularMedium,
          position: 'relative',
          transform: dsTypo.casingNone,
          marginBottom: getSpacingPX(dsSpacing.glacial),
          color: dsColor.typoPrimary,
          [`&.${inputLabelClasses.focused}:not(.${inputLabelClasses.disabled})`]: {
            color: dsColor.typoPrimary
          },
          '&.MuiFormLabel-colorSuccess': {
            color: dsColor.supportPositive
          },
          [`&.${inputLabelClasses.focused}.MuiFormLabel-colorSuccess`]: {
            color: dsColor.supportPositive
          },
          [`&.${inputLabelClasses.error}`]: {
            color: dsColor.supportNegative
          },
          [`&.${inputLabelClasses.focused}.${inputLabelClasses.error}`]: {
            color: dsColor.supportNegative
          }
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          height: '44px',
          background: dsColor.surfacePrimary,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: dsColor.strokeDefault,
          borderRadius: '4px',
          padding: `${getSpacingPX(dsSpacing.frostbite)} ${getSpacingPX(dsSpacing.glacial)}`,
          [`&.${inputBaseClasses.focused}:not(.${inputBaseClasses.disabled})`]: {
            borderColor: dsColor.strokeActive
          },
          '&.MuiInputBase-colorSuccess': {
            borderColor: dsColor.supportPositive
          },
          [`&.${inputBaseClasses.focused}.MuiInputBase-colorSuccess`]: {
            borderColor: dsColor.supportPositive
          },
          [`&.${inputBaseClasses.disabled}`]: {
            background: dsColor.stateDisabledSurface,
            borderColor: dsColor.strokeDisabled
          },
          [`&.${inputBaseClasses.error}`]: {
            borderColor: dsColor.supportNegative
          },
          [`&.${inputBaseClasses.focused}.${inputBaseClasses.error}`]: {
            borderColor: dsColor.supportNegative
          },
          '&.MuiInputBase-readOnly': {
            background: dsColor.stateDisabledSurface,
            borderColor: dsColor.strokeDisabled,
            pointerEvents: 'none'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: sx({
          textTransform: 'none',
          margin: dsSpacing.zero,
          marginTop: dsSpacing.deepfreeze,
          pl: dsSpacing.deepfreeze,
          pt: dsSpacing.deepfreeze,
          pb: dsSpacing.deepfreeze
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body2: 'p',
          body3: 'p',
          overline: 'p',
          footnote: 'p',
          caption: 'p',
          inherit: 'p'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'flushed' },
          style: {
            borderRadius: 0
          }
        },
        {
          props: { variant: 'flushed', color: 'primary' },
          style: {
            color: dsColor.typoOnSurface,
            backgroundColor: dsColor.actionPrimary,
            '&:hover': {
              backgroundColor: dsColor.actionPrimary,
              boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
            }
          }
        },
        {
          props: { variant: 'flushed', color: 'primary', disabled: true },
          style: {
            backgroundColor: dsColor.stateUnselected
          }
        }
      ],
      defaultProps: {
        variant: 'contained',
        size: 'small',
        color: 'primary',
        disableElevation: true,
        focusRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        },
        text: {
          minWidth: '100px',
          '&:disabled': {
            color: dsColor.typoDisabled
          },
          '&:hover': {
            background: 'transparent'
          }
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: dsColor.actionPrimary,
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
          }
        },
        containedSecondary: {
          backgroundColor: dsColor.surfaceSecondary,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: dsColor.strokeDefault,
          color: dsColor.actionPrimary,
          '&:hover': {
            backgroundColor: dsColor.surfaceSecondary,
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)'
          },
          '&:disabled': {
            backgroundColor: dsColor.surfaceSecondary,
            color: dsColor.typoDisabled
          }
        },
        textSizeSmall: sx({
          paddingX: dsSpacing.quickfreeze,
          paddingY: dsSpacing.glacial,
          height: '28px'
        }),
        sizeLarge: sx({
          padding: dsSpacing.bittercold,
          height: '56px',
          fontSize: dsTypo.fontsizeBittercold,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeBittercold, dsTypo.lineheightZero)
        }),
        sizeMedium: sx({
          paddingX: dsSpacing.bittercold,
          paddingY: dsSpacing.frostbite,
          height: '48px',
          fontSize: dsTypo.fontsizeFrigid,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeFrigid, dsTypo.lineheightZero)
        }),
        sizeSmall: sx({
          paddingX: dsSpacing.bittercold,
          paddingY: dsSpacing.glacial,
          height: '34px',
          fontSize: dsTypo.fontsizeFrostbite,
          lineHeight: calculateLinerHeight(dsTypo.fontsizeFrostbite, dsTypo.lineheightZero)
        }),
        startIcon: sx({
          mr: 1,
          '*:nth-of-type(1)': {
            fontSize: 'inherit'
          }
        }),
        endIcon: sx({
          ml: 1,
          '*:nth-of-type(1)': {
            fontSize: 'inherit'
          }
        })
      }
    }
  }

  return components
}
