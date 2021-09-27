<script>
export default {
  name: 'GListItem',
  functional: true,
  render(createElement, { children, data }) {
    data.staticClass = 'gra-list-item'

    return createElement('div', data, children)
  },
}
</script>
