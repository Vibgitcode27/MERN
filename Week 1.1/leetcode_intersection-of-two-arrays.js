var intersection = function(nums1, nums2) 
{
    let nums3 = [];
    for(let  i = 0 ; i < nums1.length ; i++)
    {
        if(nums2.includes(nums1[i]))
        {
            if(!nums3.includes(nums1[i]))
            {
                nums3.push(nums1[i]);
            }
        }
    }
    return nums3
};