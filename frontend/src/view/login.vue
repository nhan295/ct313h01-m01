<template>

    <div>
        <div>
            <h3>Login</h3>
            <hr />
        </div>
        <form>
            <div class="form-group">
                <label>User name</label>
                <input type="text" class='form-control' name="full_name" placeholder="Enter User name" required>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class='form-control' name="password" placeholder="Enter password" required>
            </div>

            <div class="btn-sub">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>

        </form>
    </div>
</template>
  




<script>
export default{};
</script>