<template>
  <div>
    <table class="table organization-table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Organization name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>FCT Org</td>
          <td>
            <span class="new">
              new
            </span>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>SSH Org</td>
          <td>
            <span class="accepted">
              accepted
            </span>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Capitan Ms Org</td>
          <td>
            <span class="accepted">
              accepted
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  .new {
    color: #e67e22;
    text-transform: capitalize;
  }

  .accepted {
    color: #2ecc71;
    text-transform: capitalize;
  }

  .organization-table {
    tr {
      cursor: pointer;
    }

    tr:hover {
      background-color: whitesmoke;
    }
  }
</style>
